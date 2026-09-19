import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ko5efltjp.css';
import '../../css/x/x5fjsk8jr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ko5efltjp"/><path clip-rule="evenodd" class="x5fjsk8jr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mirror-ball",
	});
}

export default Component;
