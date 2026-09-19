import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqd2c6byo.css';
import '../../css/j/jv5x8340t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wqd2c6byo"/><path class="jv5x8340t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tooth",
	});
}

export default Component;
