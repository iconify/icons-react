import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p05d90bur.css';
import '../../css/s/srdg09mbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p05d90bur"/><path class="srdg09mbv"/></g>`,
		"fallback": "coolicons:user-star-corner-bulk-round",
	});
}

export default Component;
