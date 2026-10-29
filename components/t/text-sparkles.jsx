import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ezgbeof7j.css';
import '../../css/u/uvlku_bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ezgbeof7j wm-k"/><path class="uvlku_bdy wm-s"/></g>`,
		"fallback": "withicons-bauhaus:text-sparkles",
	});
}

export default Component;
