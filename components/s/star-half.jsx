import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qq8flhb5r.css';
import '../../css/m/ms7x6dbvn.css';
import '../../css/o/ojgfnh_ip.css';
import '../../css/o/o3mn46b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG74p7eeTo" x1="9" x2="15" y1="1.96" y2="22.04" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG74p7eeTo)" class="qq8flhb5r"/><path class="ms7x6dbvn wm-shine"/><path class="ojgfnh_ip wm-shine"/><path class="o3mn46b3q wm-shine"/></g>`,
		"fallback": "withicons-utsav:star-half",
	});
}

export default Component;
