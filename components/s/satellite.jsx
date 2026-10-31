import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/uj11d-rti.css';
import '../../css/p/p-yf0nb5r.css';
import '../../css/a/ap2u3eb4r.css';
import '../../css/p/phdoak30r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGv8oyBbNy" x1="10.06" x2="16.06" y1=".57" y2="21.31" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGv8oyBbNy)" class="uj11d-rti"/><path class="p-yf0nb5r wm-a"/><path class="ap2u3eb4r wm-s"/><path class="phdoak30r wm-shine"/></g>`,
		"fallback": "withicons-utsav:satellite",
	});
}

export default Component;
