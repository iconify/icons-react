import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3qtozs6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3qtozs6e"/>`,
		"fallback": "cib:last-fm",
	});
}

export default Component;
