import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/s/s2g35hbob.css';
import '../../css/r/ru5a8eb0w.css';
import '../../css/i/i-ko-ybas.css';
import '../../css/z/zcmohvbth.css';
import '../../css/o/o25bcxboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGH20CIIwF" cx="7.56" cy="8.02" r="22.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGH20CIIwF)" class="s2g35hbob wm-k"/><path class="ru5a8eb0w wm-s"/><path class="i-ko-ybas wm-deco"/><path fill="url(#SVGDCUexbkg)" class="wm-deco zcmohvbth"/><path class="o25bcxboy wm-deco"/></g>`,
		"fallback": "withicons-rangoli:list-plus",
	});
}

export default Component;
