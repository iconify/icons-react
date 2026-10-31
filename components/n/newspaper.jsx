import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hbi1pqboo.css';
import '../../css/j/j-rxpwwpq.css';
import '../../css/d/ds5k1j5er.css';
import '../../css/h/h80d--cxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUz1pEfkK" x1="9" x2="15" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGUz1pEfkK)" class="hbi1pqboo"/><path class="j-rxpwwpq wm-shine"/><path class="ds5k1j5er wm-shine"/><path class="h80d--cxb wm-shine"/></g>`,
		"fallback": "withicons-utsav:newspaper",
	});
}

export default Component;
