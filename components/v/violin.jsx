import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ratxe-bmn.css';
import '../../css/j/j33sukufh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ratxe-bmn"/><path class="j33sukufh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:violin",
	});
}

export default Component;
