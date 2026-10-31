import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vxqzf1bth.css';
import '../../css/u/uuoy88k7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9jCuSaWA" x1="8.21" x2="14.21" y1="4.51" y2="21.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9jCuSaWA)" class="vxqzf1bth"/><path class="uuoy88k7w wm-shine"/></g>`,
		"fallback": "withicons-utsav:recycle",
	});
}

export default Component;
