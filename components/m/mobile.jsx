import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3exvvawo.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/l/lt_eqm3hp.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f_qydnbny.css';
import '../../css/n/nusrxkbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGka9CIbLw" class="k3exvvawo"/></defs><mask id="SVGDl3Q1c5q" width="14" height="22" x="5" y="1" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="lt_eqm3hp"/><use href="#SVGka9CIbLw"/></mask><g class="h01tyzbfu"><use href="#SVGka9CIbLw" mask="url(#SVGDl3Q1c5q)" class="f_qydnbny"/><path class="nusrxkbcv"/></g>`,
		"fallback": "lets-icons:mobile",
	});
}

export default Component;
