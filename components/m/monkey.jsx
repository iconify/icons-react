import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6n1lvbmx.css';
import '../../css/b/b6ff58bxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h6n1lvbmx"/><path class="b6ff58bxl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:monkey",
	});
}

export default Component;
