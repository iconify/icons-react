import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lj1_g1ven.css';
import '../../css/i/iu1q11-xl.css';
import '../../css/o/ofqn7ddvt.css';
import '../../css/t/t09i8uwxi.css';
import '../../css/k/kpy7o53kg.css';
import '../../css/z/z_x2bgbdm.css';
import '../../css/b/bnz87-b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcDLdAejd" x1="9.83" x2="13.83" y1="2.6" y2="21.12" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lj1_g1ven wm-k"/><path class="iu1q11-xl wm-deco"/><path class="ofqn7ddvt wm-k"/><path fill="url(#SVGcDLdAejd)" class="t09i8uwxi wm-k"/><path class="kpy7o53kg wm-shadow"/><path class="wm-shine z_x2bgbdm"/><path class="bnz87-b5r wm-shine"/></g>`,
		"fallback": "withicons-valentine:shankh",
	});
}

export default Component;
