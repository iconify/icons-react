import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/snwoegpcg.css';
import '../../css/h/h9v7-pb5z.css';
import '../../css/b/b52q5ve-w.css';
import '../../css/t/t0xkccc1d.css';
import '../../css/x/xipco6fti.css';
import '../../css/d/dtto_ebdd.css';
import '../../css/b/bnxpi7bcz.css';
import '../../css/x/x_5q4ibou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcwixJchW" x1="9.64" x2="13.64" y1="2.76" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="snwoegpcg wm-k"/><path class="h9v7-pb5z wm-s"/><path class="b52q5ve-w wm-deco"/><path fill="url(#SVGcwixJchW)" class="t0xkccc1d wm-k"/><path class="wm-s xipco6fti"/><path class="dtto_ebdd wm-shadow"/><path class="bnxpi7bcz wm-shine"/><path class="wm-shine x_5q4ibou"/></g>`,
		"fallback": "withicons-valentine:user-heart",
	});
}

export default Component;
