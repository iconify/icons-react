import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/nvw3y0bok.css';
import '../../css/c/c1dlidnny.css';
import '../../css/y/yy_b16b1f.css';
import '../../css/g/g11hmxbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="nvw3y0bok wm-k"/><path class="c1dlidnny wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="wm-k yy_b16b1f"/><path class="g11hmxbmz wm-shadow"/></g>`,
		"fallback": "withicons-valentine:language",
	});
}

export default Component;
