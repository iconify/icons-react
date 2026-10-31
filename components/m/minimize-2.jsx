import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ofvnsccnh.css';
import '../../css/v/vh2bn0sgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ofvnsccnh"/><path class="vh2bn0sgl"/></g>`,
		"fallback": "withicons-retro:minimize-2",
	});
}

export default Component;
