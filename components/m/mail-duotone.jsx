import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr_-0hydc.css';
import '../../css/r/r_qn8mb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lr_-0hydc secondary"/><path class="primary r_qn8mb4k"/></g>`,
		"fallback": "iconaut:mail-duotone",
	});
}

export default Component;
