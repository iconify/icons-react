import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f95e_ofpq.css';
import '../../css/l/liqgtpb1t.css';
import '../../css/w/w05qg2j_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f95e_ofpq"/><path class="liqgtpb1t"/><path class="w05qg2j_m"/></g>`,
		"fallback": "andrsrxn:sim-chip",
	});
}

export default Component;
