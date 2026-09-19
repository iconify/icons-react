import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q5vc8fv2s.css';
import '../../css/x/xom4f6j5k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q5vc8fv2s"/><path class="xom4f6j5k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:snowboarder",
	});
}

export default Component;
