import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/thk7xssmk.css';
import '../../css/r/rcf1vqgvr.css';
import '../../css/i/iz09ezwme.css';
import '../../css/q/qh_c44v_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="thk7xssmk"/><path class="rcf1vqgvr wm-shine"/><path class="iz09ezwme wm-shine"/><path class="qh_c44v_g wm-shine"/></g>`,
		"fallback": "withicons-utsav:rows",
	});
}

export default Component;
