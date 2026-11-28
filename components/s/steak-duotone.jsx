import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlou43auj.css';
import '../../css/e/ewwbcbc-y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qlou43auj"/><path class="ewwbcbc-y"/></g>`,
		"fallback": "pullo:steak-duotone",
	});
}

export default Component;
