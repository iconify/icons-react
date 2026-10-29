import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5_fqnb0s.css';
import '../../css/s/stui2mbih.css';
import '../../css/z/z4y60jbap.css';
import '../../css/k/k4z5qfbck.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/b/bbzggybkd.css';
import '../../css/z/zlof8-b3q.css';
import '../../css/d/dqellvbul.css';
import '../../css/m/m9-s4ub5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVdLamehM" x1="1.59" x2="13.04" y1="1.6" y2="22.41" gradientUnits="userSpaceOnUse"><stop offset="0" class="p5_fqnb0s"/><stop offset=".42" class="stui2mbih"/><stop offset=".58" class="z4y60jbap"/><stop offset="1" class="k4z5qfbck"/></linearGradient><linearGradient id="SVG05PYNbYK" x1="0" x2="0" y1=".46" y2="5.76" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="bbzggybkd"/><path fill="url(#SVGVdLamehM)" class="wm-shine zlof8-b3q"/><path class="dqellvbul wm-deco"/><path fill="url(#SVG05PYNbYK)" class="m9-s4ub5h wm-deco"/></g>`,
		"fallback": "withicons-christmas:ruler",
	});
}

export default Component;
