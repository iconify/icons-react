import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oercq_b8v.css';
import '../../css/f/fympz7aff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oercq_b8v wm-k"/><path class="fympz7aff wm-s"/></g>`,
		"fallback": "withicons-bauhaus:moon-star",
	});
}

export default Component;
