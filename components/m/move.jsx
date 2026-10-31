import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jllicjb_k.css';
import '../../css/n/n0ly8hvzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jllicjb_k"/><path class="n0ly8hvzu"/></g>`,
		"fallback": "withicons-retro:move",
	});
}

export default Component;
