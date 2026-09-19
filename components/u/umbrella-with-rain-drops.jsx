import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj_tubcvr.css';
import '../../css/i/ihyjxacvv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aj_tubcvr"/><path class="ihyjxacvv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:umbrella-with-rain-drops",
	});
}

export default Component;
