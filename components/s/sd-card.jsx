import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ktcq-6eoc.css';
import '../../css/b/b_xzdzbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ktcq-6eoc"/><path class="b_xzdzbdo"/></g>`,
		"fallback": "withicons-bauhaus:sd-card",
	});
}

export default Component;
