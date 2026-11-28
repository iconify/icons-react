import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2nnyoncm.css';
import '../../css/q/q9raedvcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d2nnyoncm secondary"/><path class="primary q9raedvcr"/></g>`,
		"fallback": "iconaut:text-split-duotone",
	});
}

export default Component;
