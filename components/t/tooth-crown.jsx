import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/g/g7trs0bqv.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/j7ucld9bf.css';
import '../../css/b/b0flgab8j.css';
import '../../css/t/tp06wkwfm.css';
import '../../css/w/w0-g0g0iy.css';
import '../../css/i/i0qw_2g5r.css';
import '../../css/l/lnh3ylboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient><linearGradient id="SVGnOLOBb9F" x1="0" x2="0" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" class="g7trs0bqv"/><stop offset=".5" class="g7trs0bqv"/><stop offset="1" class="pgqql6bua"/></linearGradient><radialGradient id="SVG6HJ1VckA" cx="8.7" cy="5.06" r="15.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="j7ucld9bf wm-deco"/><path fill="url(#SVGDCUexbkg)" class="b0flgab8j wm-deco"/><path class="tp06wkwfm wm-shadow"/><path fill="url(#SVGnOLOBb9F)" class="w0-g0g0iy wm-a"/><path fill="url(#SVG6HJ1VckA)" class="i0qw_2g5r wm-k"/><path class="lnh3ylboz wm-shine"/></g>`,
		"fallback": "withicons-rangoli:tooth-crown",
	});
}

export default Component;
