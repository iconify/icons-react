import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqkedmbxx.css';
import '../../css/t/twiwxbbnw.css';
import '../../css/c/c4jp5ebqc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqkedmbxx"/><path class="twiwxbbnw"/><path class="c4jp5ebqc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-walking-facing-right",
	});
}

export default Component;
