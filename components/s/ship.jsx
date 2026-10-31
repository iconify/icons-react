import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/m6lt5_n8a.css';
import '../../css/c/c4xapduci.css';
import '../../css/o/owk63e-jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGARUmye3y" x1="9" x2="15" y1="2" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGARUmye3y)" class="m6lt5_n8a"/><path class="c4xapduci wm-a"/><path class="owk63e-jo wm-shine"/></g>`,
		"fallback": "withicons-utsav:ship",
	});
}

export default Component;
