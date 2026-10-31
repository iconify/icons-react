import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fmau8bc-l.css';
import '../../css/o/o7a0ftayn.css';
import '../../css/y/yt07qtr4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhoZDPeNX" x1="9" x2="15" y1="5.01" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGhoZDPeNX)" class="fmau8bc-l"/><path class="o7a0ftayn wm-a"/><path class="wm-shine yt07qtr4z"/></g>`,
		"fallback": "withicons-utsav:router",
	});
}

export default Component;
