import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bwmi3_ojz.css';
import '../../css/m/mt35gqb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bwmi3_ojz"/><path class="mt35gqb3s"/></g>`,
		"fallback": "withicons-retro:japanese-yen",
	});
}

export default Component;
