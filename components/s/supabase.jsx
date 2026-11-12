import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmjwiuq4d.css';
import '../../css/d/dkd-0gk2d.css';
import '../../css/e/ega8_kboi.css';
import '../../css/k/k05n1gbkm.css';
import '../../css/r/r2pxwzjak.css';
import '../../css/y/y--l6gici.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGCpMCUcir" x1="236.9" x2="420.7" y1="290.1" y2="367.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="vmjwiuq4d"/><stop offset="1" class="dkd-0gk2d"/></linearGradient><path fill="url(#SVGCpMCUcir)" class="ega8_kboi"/><linearGradient id="SVGbEzDtbgG" x1="245.7" x2="329.5" y1="99.7" y2="257.6" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="k05n1gbkm"/></linearGradient><path fill="url(#SVGbEzDtbgG)" class="r2pxwzjak"/><path class="y--l6gici"/>`,
		"fallback": "selfhst:supabase",
	});
}

export default Component;
