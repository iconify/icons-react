import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bntif01uf.css';
import '../../css/k/kz56b4fcv.css';
import '../../css/o/opr_l_byy.css';
import '../../css/h/hnsqxefzs.css';
import '../../css/u/uyjaz4c0v.css';
import '../../css/a/asvu34b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGd7GTgcgO" x1="10" x2="14" y1="5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bntif01uf wm-k"/><path class="kz56b4fcv wm-s"/><path class="opr_l_byy wm-deco"/><path fill="url(#SVGd7GTgcgO)" class="hnsqxefzs wm-k"/><path class="uyjaz4c0v wm-s"/><path class="asvu34b8u wm-shadow"/></g>`,
		"fallback": "withicons-valentine:list-plus",
	});
}

export default Component;
