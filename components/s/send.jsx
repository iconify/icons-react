import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gsuqsbnyr.css';
import '../../css/u/ubh86_b3w.css';
import '../../css/t/ttd6encun.css';
import '../../css/w/wjr5mjidu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvyQ5ZdHo" x1="8.99" x2="14.99" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGvyQ5ZdHo)" class="gsuqsbnyr"/><path class="ubh86_b3w wm-shine"/><path class="ttd6encun wm-shine"/><path class="wjr5mjidu wm-shine"/></g>`,
		"fallback": "withicons-utsav:send",
	});
}

export default Component;
