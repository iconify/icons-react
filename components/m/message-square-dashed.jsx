import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jrgpz7bvh.css';
import '../../css/g/gcbea1zjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jrgpz7bvh"/><path class="gcbea1zjt"/></g>`,
		"fallback": "iconaut:message-square-dashed",
	});
}

export default Component;
