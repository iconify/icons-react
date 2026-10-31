import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/ol5jnbdeq.css';
import '../../css/k/ktl0_vjnv.css';
import '../../css/u/ud4m29h6y.css';
import '../../css/n/ne3rj-i6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBsRmKeFE" x1="9" x2="15" y1="4.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="ol5jnbdeq wm-s"/><path fill="url(#SVGBsRmKeFE)" class="ktl0_vjnv"/><path class="ud4m29h6y wm-s"/><path class="ne3rj-i6n wm-shine"/></g>`,
		"fallback": "withicons-utsav:text-sparkles",
	});
}

export default Component;
