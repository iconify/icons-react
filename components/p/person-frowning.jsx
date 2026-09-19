import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yqdowilpf.css';
import '../../css/m/mf0k5czxu.css';
import '../../css/x/xajdwdbsc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yqdowilpf"/><path class="mf0k5czxu"/><path class="xajdwdbsc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-frowning",
	});
}

export default Component;
