import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yqov2aboo.css';
import '../../css/e/etwl14but.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yqov2aboo"/><path class="etwl14but"/></g>`,
		"fallback": "fluent-emoji-high-contrast:upside-down-face",
	});
}

export default Component;
