import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/ktzib188r.css';
import '../../css/t/tla41vb0p.css';
import '../../css/g/gy74_hboo.css';
import '../../css/r/rxrg3bbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2huWFciU" x1="10.25" x2="14.25" y1="4.25" y2="19.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ktzib188r wm-k"/><path class="tla41vb0p wm-deco"/><path fill="url(#SVG2huWFciU)" class="gy74_hboo wm-k"/><path class="rxrg3bbqc wm-shadow"/></g>`,
		"fallback": "withicons-valentine:list",
	});
}

export default Component;
