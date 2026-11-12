import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0zbnobyd.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/s/sll_zg-uo.css';
import '../../css/p/p_qts-b_r.css';
import '../../css/r/rkn7dcc2m.css';
import '../../css/t/teouqwhca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0zbnobyd"/><linearGradient id="SVG8VYIieVf" x1="49" x2="151.6" y1="390" y2="179.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="v9u8nhb5n"/><stop offset=".5" class="sll_zg-uo"/><stop offset="1" class="p_qts-b_r"/></linearGradient><path fill="url(#SVG8VYIieVf)" class="rkn7dcc2m"/><linearGradient id="SVG0Iq2Edtq" x1="244.4" x2="380.5" y1="252.4" y2="454.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="v9u8nhb5n"/><stop offset=".5" class="sll_zg-uo"/><stop offset="1" class="p_qts-b_r"/></linearGradient><path fill="url(#SVG0Iq2Edtq)" class="teouqwhca"/>`,
		"fallback": "selfhst:komplett-dark",
	});
}

export default Component;
