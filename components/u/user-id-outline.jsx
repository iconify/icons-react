import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2005ubac.css';
import '../../css/n/nokt7zbev.css';
import '../../css/t/tyvf8cx3e.css';
import '../../css/r/r7fy5tbbs.css';
import '../../css/v/v0shu15oi.css';
import '../../css/f/fg_n_yp1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y2005ubac"/><path clip-rule="evenodd" class="nokt7zbev"/><path class="tyvf8cx3e"/><path class="r7fy5tbbs"/><path class="v0shu15oi"/><path clip-rule="evenodd" class="fg_n_yp1e"/></g>`,
		"fallback": "solar:user-id-outline",
	});
}

export default Component;
