import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/k6bfk1-yg.css';
import '../../css/w/w4jvmzuah.css';
import '../../css/j/j42rvpb_g.css';
import '../../css/g/gq2u_2vai.css';
import '../../css/e/ebb30lb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="k6bfk1-yg wm-k"/><path class="w4jvmzuah wm-deco"/><path class="j42rvpb_g wm-k"/><path fill="url(#SVGFXzhPeEy)" class="gq2u_2vai wm-k"/><path class="ebb30lb2x wm-shadow"/></g>`,
		"fallback": "withicons-valentine:shield-question",
	});
}

export default Component;
