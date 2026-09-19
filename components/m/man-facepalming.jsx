import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/simk7bbem.css';
import '../../css/m/m03kxbbvv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="simk7bbem"/><path class="m03kxbbvv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-facepalming",
	});
}

export default Component;
