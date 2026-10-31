import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/luzp4db6o.css';
import '../../css/v/vo5h-of0h.css';
import '../../css/z/zn--apn8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPUQBmcGW" x1="9.51" x2="15.51" y1="2.01" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGPUQBmcGW)" class="luzp4db6o"/><path class="vo5h-of0h wm-a"/><path class="wm-shine zn--apn8m"/></g>`,
		"fallback": "withicons-utsav:syringe",
	});
}

export default Component;
