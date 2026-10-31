import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/nwjarwbgu.css';
import '../../css/f/fglpeub8v.css';
import '../../css/b/bmzudebxe.css';
import '../../css/h/hx0vx6adi.css';
import '../../css/e/eqc4z5l4a.css';
import '../../css/u/u8rgq9bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGModhGeLT" x1="10" x2="14" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="nwjarwbgu wm-k"/><path class="fglpeub8v wm-deco"/><path fill="url(#SVGModhGeLT)" class="bmzudebxe wm-k"/><path class="hx0vx6adi wm-shadow"/><path class="eqc4z5l4a wm-shine"/><path class="u8rgq9bvx wm-shine"/></g>`,
		"fallback": "withicons-valentine:repeat",
	});
}

export default Component;
