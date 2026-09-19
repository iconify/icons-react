import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9f2nzuog.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9f2nzuog"/>`,
		"fallback": "fa7-brands:square-reddit",
	});
}

export default Component;
