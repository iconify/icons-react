import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ycjkxebii.css';
import '../../css/w/wtxkys0ov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ycjkxebii"/><path class="wtxkys0ov"/></g>`,
		"fallback": "fluent-emoji-high-contrast:oncoming-bus",
	});
}

export default Component;
