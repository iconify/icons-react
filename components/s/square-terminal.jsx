import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cp3mmzv4t.css';
import '../../css/t/t1q_f-bqh.css';
import '../../css/s/sz2_x4f1m.css';
import '../../css/d/d30_rj4ki.css';
import '../../css/t/t9yw3qsqm.css';
import '../../css/x/xn4ak4bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="cp3mmzv4t"/><path class="t1q_f-bqh wm-shine"/><path class="sz2_x4f1m wm-shine"/><path class="d30_rj4ki wm-shine"/><path class="t9yw3qsqm wm-shine"/><path class="wm-shine xn4ak4bkp"/></g>`,
		"fallback": "withicons-utsav:square-terminal",
	});
}

export default Component;
