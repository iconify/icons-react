import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u5pj6cc-c.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u5pj6cc-c wm-k"/><path class="ohtj0i3jo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:lightbulb-off",
	});
}

export default Component;
