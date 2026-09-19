import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejl9ky0qb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejl9ky0qb"/>`,
		"fallback": "carbon:notification-off",
	});
}

export default Component;
