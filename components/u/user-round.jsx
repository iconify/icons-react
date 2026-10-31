import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t9kgh_jmc.css';
import '../../css/q/qtj6dw_ck.css';
import '../../css/e/elb564bsk.css';
import '../../css/o/o-xejiwbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="t9kgh_jmc"/><path class="qtj6dw_ck wm-shine"/><path class="elb564bsk wm-shine"/><path class="o-xejiwbw wm-shine"/></g>`,
		"fallback": "withicons-utsav:user-round",
	});
}

export default Component;
