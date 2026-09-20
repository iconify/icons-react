import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8xm15yec.css';
import '../../css/v/vn3dy8b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="k8xm15yec"/><path class="vn3dy8b1k"/></g>`,
		"fallback": "majesticons:link-circle-line",
	});
}

export default Component;
