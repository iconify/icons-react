import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk8zlsbsk.css';
import '../../css/s/svdkxk0qh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk8zlsbsk"/><path class="svdkxk0qh"/>`,
		"fallback": "carbon:touch-1",
	});
}

export default Component;
