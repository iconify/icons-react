import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q7xu7q47e.css';
import '../../css/v/vx7x2yb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q7xu7q47e"/><path class="vx7x2yb9i"/></g>`,
		"fallback": "solar:moon-fog-outline",
	});
}

export default Component;
