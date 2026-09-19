import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qifirlq4v.css';
import '../../css/b/bjojovhyo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qifirlq4v"/><path class="bjojovhyo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:smiling-face-with-heart-eyes",
	});
}

export default Component;
