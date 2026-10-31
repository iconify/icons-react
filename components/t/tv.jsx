import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/l6ytxxpjh.css';
import '../../css/a/a_4xhxgdp.css';
import '../../css/g/gr9904qwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvE0yObFg" x1="9.01" x2="15.01" y1="1.51" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGvE0yObFg)" class="l6ytxxpjh"/><path class="a_4xhxgdp wm-a"/><path class="gr9904qwa wm-shine"/></g>`,
		"fallback": "withicons-utsav:tv",
	});
}

export default Component;
