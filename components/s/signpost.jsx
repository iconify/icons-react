import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/goiy7tg1d.css';
import '../../css/b/b52r_1_rv.css';
import '../../css/f/fmbjc_bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXCy6ndkR" x1="9" x2="15" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGXCy6ndkR)" class="goiy7tg1d"/><path class="b52r_1_rv wm-a"/><path class="fmbjc_bur wm-shine"/></g>`,
		"fallback": "withicons-utsav:signpost",
	});
}

export default Component;
