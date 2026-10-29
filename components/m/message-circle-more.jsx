import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/h/h0_d3oolp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wxwl6_qzl"/><path class="h0_d3oolp wm-a"/></g>`,
		"fallback": "withicons:message-circle-more",
	});
}

export default Component;
