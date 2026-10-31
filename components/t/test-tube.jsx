import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fy6grcb5w.css';
import '../../css/x/x7qnvvbsq.css';
import '../../css/e/eg0no8beq.css';
import '../../css/y/y_g58613u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEjbpncKx" x1="10.18" x2="16.18" y1="1.83" y2="19.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGEjbpncKx)" class="fy6grcb5w"/><path class="wm-shine x7qnvvbsq"/><path class="eg0no8beq wm-shine"/><path class="wm-shine y_g58613u"/></g>`,
		"fallback": "withicons-utsav:test-tube",
	});
}

export default Component;
