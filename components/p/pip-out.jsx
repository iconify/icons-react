import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pdsx7eb7o.css';
import '../../css/g/g3wkg17kd.css';
import '../../css/c/cw_x5lbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pdsx7eb7o"/><path class="g3wkg17kd"/><path class="cw_x5lbhp"/></g>`,
		"fallback": "andrsrxn:pip-out",
	});
}

export default Component;
