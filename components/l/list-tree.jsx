import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/esimydb1u.css';
import '../../css/h/hy33ejjam.css';
import '../../css/e/e3ssfnbwt.css';
import '../../css/k/kckne7byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGP5Gsge5a" x1="10.75" x2="14.75" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="esimydb1u wm-k"/><path class="hy33ejjam wm-deco"/><path fill="url(#SVGP5Gsge5a)" class="e3ssfnbwt wm-k"/><path class="kckne7byb wm-shadow"/></g>`,
		"fallback": "withicons-valentine:list-tree",
	});
}

export default Component;
