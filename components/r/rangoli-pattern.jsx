import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rjxv_jb-p.css';
import '../../css/k/ktdwarbey.css';
import '../../css/u/u6qptqb0w.css';
import '../../css/w/w6kgajbiy.css';
import '../../css/t/tlfi0dbim.css';
import '../../css/o/of7c331rs.css';
import '../../css/t/tbosp2z2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtwbKocpe" x1="10" x2="14" y1="1" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rjxv_jb-p wm-k"/><path class="ktdwarbey wm-a"/><path class="u6qptqb0w wm-k"/><path fill="url(#SVGtwbKocpe)" class="w6kgajbiy wm-k"/><path class="tlfi0dbim wm-a"/><path class="of7c331rs wm-shadow"/><path class="tbosp2z2r wm-shine"/></g>`,
		"fallback": "withicons-valentine:rangoli-pattern",
	});
}

export default Component;
