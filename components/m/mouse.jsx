import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rwirjzbtk.css';
import '../../css/e/ej888ab6r.css';
import '../../css/e/ef097cb4r.css';
import '../../css/j/jf9owrbyv.css';
import '../../css/o/o3_8yfbgk.css';
import '../../css/x/xlqns9xze.css';
import '../../css/h/hfwvvdblf.css';
import '../../css/r/ro0npo9-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH854iddR" x1="10" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rwirjzbtk wm-k"/><path class="ej888ab6r wm-deco"/><path fill="url(#SVGH854iddR)" class="ef097cb4r wm-k"/><path class="jf9owrbyv wm-shadow"/><path class="o3_8yfbgk wm-k"/><path class="wm-a xlqns9xze"/><path class="hfwvvdblf wm-shine"/><circle class="ro0npo9-n wm-shine"/></g>`,
		"fallback": "withicons-valentine:mouse",
	});
}

export default Component;
