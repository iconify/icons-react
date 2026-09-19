import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9-zp1oyu.css';
import '../../css/k/k-yulk6mx.css';
import '../../css/h/h09dbrtwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f9-zp1oyu"/><path class="k-yulk6mx"/><path class="h09dbrtwn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-pilot",
	});
}

export default Component;
