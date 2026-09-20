import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5firfbkf.css';
import '../../css/t/td-8tjwmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5firfbkf"/><path class="td-8tjwmd"/></g>`,
		"fallback": "solar:sim-card-minimalistic-bold-duotone",
	});
}

export default Component;
