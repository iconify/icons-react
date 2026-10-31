import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q4rhsv0ue.css';
import '../../css/u/ua746xj0h.css';
import '../../css/p/p3292x1pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q4rhsv0ue wm-shadow"/><path class="ua746xj0h"/><path class="p3292x1pz"/></g>`,
		"fallback": "withicons-retro:text-search",
	});
}

export default Component;
