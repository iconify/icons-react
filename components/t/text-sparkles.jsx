import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dz68pmhba.css';
import '../../css/t/t96vnybgy.css';
import '../../css/x/xwzqgyp5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dz68pmhba wm-shadow"/><path class="t96vnybgy wm-s"/><path class="xwzqgyp5j"/></g>`,
		"fallback": "withicons-retro:text-sparkles",
	});
}

export default Component;
