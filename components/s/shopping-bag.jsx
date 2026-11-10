import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp_1wgb1c.css';
import '../../css/o/oe_dinskv.css';
import '../../css/m/ml2j5ib2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kp_1wgb1c"/><path class="oe_dinskv"/><path class="ml2j5ib2p"/></g>`,
		"fallback": "andrsrxn:shopping-bag",
	});
}

export default Component;
