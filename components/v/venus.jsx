import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-qd56bzw.css';

const viewBox = {"width":1152,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-qd56bzw"/>`,
		"fallback": "fa:venus",
	});
}

export default Component;
