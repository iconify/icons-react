import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spjl01l0b.css';
import '../../css/e/e6qjd50sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spjl01l0b"/><path class="e6qjd50sc"/></g>`,
		"fallback": "coolicons:save-bulk-round",
	});
}

export default Component;
