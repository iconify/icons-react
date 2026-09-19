import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scrufj9qh.css';
import '../../css/v/vhffc8b8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="scrufj9qh"/><path class="vhffc8b8q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sparkler",
	});
}

export default Component;
