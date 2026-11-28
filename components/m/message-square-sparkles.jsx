import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0f2x9b0h.css';
import '../../css/a/af_7eacyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t0f2x9b0h"/><path class="af_7eacyu"/></g>`,
		"fallback": "iconaut:message-square-sparkles",
	});
}

export default Component;
