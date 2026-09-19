import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scqlewbkb.css';
import '../../css/y/y_hrx7wcx.css';
import '../../css/u/u4zlcabbx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="scqlewbkb"/><path class="y_hrx7wcx"/><path class="u4zlcabbx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-swimming",
	});
}

export default Component;
