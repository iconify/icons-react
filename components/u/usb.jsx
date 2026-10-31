import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/y5m9iybpe.css';
import '../../css/q/q0jle9-7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGupX2cNsW" x1="9.12" x2="15.12" y1="1" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGupX2cNsW)" class="y5m9iybpe"/><path class="q0jle9-7k wm-shine"/></g>`,
		"fallback": "withicons-utsav:usb",
	});
}

export default Component;
