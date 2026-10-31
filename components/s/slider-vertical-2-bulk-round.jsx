import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/il8_u6bks.css';
import '../../css/q/qaihx02-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="il8_u6bks"/><path class="qaihx02-f"/></g>`,
		"fallback": "coolicons:slider-vertical-2-bulk-round",
	});
}

export default Component;
