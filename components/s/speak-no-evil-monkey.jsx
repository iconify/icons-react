import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvx-ivcle.css';
import '../../css/j/j9geg7rdq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uvx-ivcle"/><path class="j9geg7rdq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:speak-no-evil-monkey",
	});
}

export default Component;
