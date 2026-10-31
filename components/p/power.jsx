import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t5bi1acnw.css';
import '../../css/r/r7f-ovboo.css';
import '../../css/e/e-ygldssm.css';
import '../../css/n/n6n_i99tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHxZzFkJH" x1="9" x2="15" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHxZzFkJH)" class="t5bi1acnw"/><path class="r7f-ovboo wm-shine"/><path class="e-ygldssm wm-shine"/><path class="n6n_i99tg wm-shine"/></g>`,
		"fallback": "withicons-utsav:power",
	});
}

export default Component;
