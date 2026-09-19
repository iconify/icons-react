import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2iu6acba.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2iu6acba"/>`,
		"fallback": "fa7-solid:k",
	});
}

export default Component;
