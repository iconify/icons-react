import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfngnx80n.css';
import '../../css/e/e23h7qqhm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rfngnx80n"/><path class="e23h7qqhm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:videocassette",
	});
}

export default Component;
