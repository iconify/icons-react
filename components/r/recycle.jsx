import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/z/zv5te5zfa.css';
import '../../css/l/lt7o9pb5k.css';
import '../../css/g/g-4qsbcet.css';
import '../../css/j/jcjbp-xdp.css';
import '../../css/l/la2hqik6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGFyQiMdqQ" cx="8.39" cy="7.74" r="20.12" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="wm-a zv5te5zfa"/><path fill="url(#SVGFyQiMdqQ)" class="lt7o9pb5k wm-k"/><path class="g-4qsbcet wm-deco"/><path fill="url(#SVGDCUexbkg)" class="jcjbp-xdp wm-deco"/><path class="la2hqik6s wm-deco"/></g>`,
		"fallback": "withicons-rangoli:recycle",
	});
}

export default Component;
