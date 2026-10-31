import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xrt_tgebk.css';
import '../../css/c/cjxmunb3v.css';
import '../../css/v/vhrj3zpqr.css';
import '../../css/x/xk7t9ereq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="xrt_tgebk"/><path class="cjxmunb3v wm-shine"/><path class="vhrj3zpqr wm-shine"/><path class="wm-shine xk7t9ereq"/></g>`,
		"fallback": "withicons-utsav:shield-question",
	});
}

export default Component;
