import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec5jxpckg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec5jxpckg"/>`,
		"fallback": "fa7-solid:square-caret-up",
	});
}

export default Component;
