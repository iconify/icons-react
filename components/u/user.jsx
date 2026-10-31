import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/s/su8yhmbnz.css';
import '../../css/a/a5ggu_bar.css';
import '../../css/e/ea7edhduq.css';
import '../../css/c/c7k43fbhu.css';
import '../../css/v/v5a9w_o2t.css';
import '../../css/x/xqnf5x2rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGOT36vc6R" cx="8.04" cy="6.79" r="23.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="su8yhmbnz wm-shadow"/><path fill="url(#SVGOT36vc6R)" class="a5ggu_bar wm-k"/><path class="ea7edhduq wm-shine"/><path class="c7k43fbhu wm-deco"/><path fill="url(#SVGDCUexbkg)" class="v5a9w_o2t wm-deco"/><path class="wm-deco xqnf5x2rj"/></g>`,
		"fallback": "withicons-rangoli:user",
	});
}

export default Component;
