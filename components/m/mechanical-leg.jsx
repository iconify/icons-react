import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6z9kab6j.css';
import '../../css/a/a7r8y8b3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6z9kab6j"/><path class="a7r8y8b3b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mechanical-leg",
	});
}

export default Component;
