import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g85fafi4q.css';
import '../../css/c/c_9dlbcwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g85fafi4q wm-k"/><path class="c_9dlbcwu wm-s"/></g>`,
		"fallback": "withicons-bauhaus:smartphone-charging",
	});
}

export default Component;
