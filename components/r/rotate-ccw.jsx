import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/y5_ah6qub.css';
import '../../css/z/zuphzlbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGchPkcd9H" x1="8.99" x2="14.99" y1="1.51" y2="21.86" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGchPkcd9H)" class="y5_ah6qub"/><path class="wm-shine zuphzlbce"/></g>`,
		"fallback": "withicons-utsav:rotate-ccw",
	});
}

export default Component;
