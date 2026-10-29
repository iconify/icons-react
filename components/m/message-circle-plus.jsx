import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/i/i0u0rnq4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wxwl6_qzl"/><path class="i0u0rnq4a wm-a"/></g>`,
		"fallback": "withicons:message-circle-plus",
	});
}

export default Component;
