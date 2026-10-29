import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ejsq0rb1p.css';
import '../../css/p/prr8kzb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ejsq0rb1p wm-k"/><path class="prr8kzb7x wm-s"/></g>`,
		"fallback": "withicons-bauhaus:message-square-dot",
	});
}

export default Component;
