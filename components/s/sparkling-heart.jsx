import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7ciasfqe.css';
import '../../css/x/xq8n1mblv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s7ciasfqe"/><path class="xq8n1mblv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sparkling-heart",
	});
}

export default Component;
