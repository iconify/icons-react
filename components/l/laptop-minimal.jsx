import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k_e5wnaul.css';
import '../../css/l/l13fftxxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="k_e5wnaul"/><path class="l13fftxxn"/></g>`,
		"fallback": "hugeicons:laptop-minimal",
	});
}

export default Component;
