import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/yzih09b3g.css';
import '../../css/s/sf09d4b0m.css';
import '../../css/e/ecfng0b5t.css';
import '../../css/u/u210q4_af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGc2oI5bDn" x1="9" x2="15" y1="1.36" y2="22.67" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGc2oI5bDn)" class="yzih09b3g"/><path class="sf09d4b0m wm-shine"/><path class="ecfng0b5t wm-shine"/><path class="u210q4_af wm-shine"/></g>`,
		"fallback": "withicons-utsav:marigold",
	});
}

export default Component;
