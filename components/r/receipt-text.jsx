import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/asmmd9bvh.css';
import '../../css/z/zyufg6b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="asmmd9bvh"/><path class="zyufg6b_o"/></g>`,
		"fallback": "withicons-bauhaus:receipt-text",
	});
}

export default Component;
