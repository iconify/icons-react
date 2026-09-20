import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5firfbkf.css';
import '../../css/o/oim6mdb6p.css';
import '../../css/j/j4sfh2eqn.css';
import '../../css/g/grfxzyb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5firfbkf"/><path class="oim6mdb6p"/><path class="j4sfh2eqn"/><path class="grfxzyb0y"/></g>`,
		"fallback": "solar:sim-card-bold-duotone",
	});
}

export default Component;
