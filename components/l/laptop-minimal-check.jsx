import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k_e5wnaul.css';
import '../../css/l/l13fftxxn.css';
import '../../css/r/ry35kdb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="k_e5wnaul"/><path class="l13fftxxn"/><path class="ry35kdb8x"/></g>`,
		"fallback": "hugeicons:laptop-minimal-check",
	});
}

export default Component;
