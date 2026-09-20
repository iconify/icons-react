import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fw-p4owqd.css';
import '../../css/k/ktj3-7bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fw-p4owqd"/><path class="ktj3-7bcx"/></g>`,
		"fallback": "tabler:paint-off",
	});
}

export default Component;
