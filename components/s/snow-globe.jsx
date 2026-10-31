import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/s1k-3hbki.css';
import '../../css/c/cdmsfdbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOcuJ8EPD" x1="9" x2="15" y1="1.02" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGOcuJ8EPD)" class="s1k-3hbki"/><path class="cdmsfdbzo wm-shine"/></g>`,
		"fallback": "withicons-utsav:snow-globe",
	});
}

export default Component;
