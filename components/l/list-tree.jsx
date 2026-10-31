import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ge1aoyz9p.css';
import '../../css/p/p2cq1-bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ge1aoyz9p"/><path class="p2cq1-bud"/></g>`,
		"fallback": "withicons-retro:list-tree",
	});
}

export default Component;
