import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/up4w-0bec.css';
import '../../css/j/jjcvbp1ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGD3jfccRW" x1="8.99" x2="14.99" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGD3jfccRW)" class="up4w-0bec"/><path class="jjcvbp1ob wm-shine"/></g>`,
		"fallback": "withicons-utsav:mountain-snow",
	});
}

export default Component;
