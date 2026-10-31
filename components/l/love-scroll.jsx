import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/x_3q16bdq.css';
import '../../css/b/bl7agbc2o.css';
import '../../css/v/v7qaocc8o.css';
import '../../css/o/oqpsgwb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7ACZSbWP" x1="9.25" x2="15.25" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wm-s x_3q16bdq"/><path fill="url(#SVG7ACZSbWP)" class="bl7agbc2o"/><path class="v7qaocc8o wm-s"/><path class="oqpsgwb4p wm-shine"/></g>`,
		"fallback": "withicons-utsav:love-scroll",
	});
}

export default Component;
