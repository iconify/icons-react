import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fu9mt3bva.css';
import '../../css/q/q_e251bpo.css';
import '../../css/m/me86ccc_a.css';
import '../../css/x/x_jwp_bge.css';
import '../../css/y/yy3grib4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fu9mt3bva"/><path class="q_e251bpo"/><circle class="me86ccc_a"/><path class="x_jwp_bge"/><path class="yy3grib4x"/></g>`,
		"fallback": "solar:stethoscope-linear",
	});
}

export default Component;
