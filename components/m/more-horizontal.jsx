import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kmfs8ib6j.css';
import '../../css/h/hv21fab2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN3kM1cfr" x1="9" x2="15" y1="10.13" y2="13.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGN3kM1cfr)" class="kmfs8ib6j"/><path class="hv21fab2b wm-shine"/></g>`,
		"fallback": "withicons-utsav:more-horizontal",
	});
}

export default Component;
