import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b7jzv-0wj.css';
import '../../css/l/l7xvsk9cs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b7jzv-0wj"/><path class="l7xvsk9cs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:stopwatch",
	});
}

export default Component;
