import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4l6q0btk.css';
import '../../css/y/yhao_dhvr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y4l6q0btk"/><path class="yhao_dhvr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sauropod",
	});
}

export default Component;
