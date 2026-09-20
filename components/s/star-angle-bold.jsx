import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vg0klab_s.css';
import '../../css/g/gly1y5baa.css';
import '../../css/c/cbyb2op2u.css';
import '../../css/m/mrj28bcsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vg0klab_s"/><path class="gly1y5baa"/><path class="cbyb2op2u"/><path class="mrj28bcsc"/></g>`,
		"fallback": "solar:star-angle-bold",
	});
}

export default Component;
