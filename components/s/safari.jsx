import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onq6dtr8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onq6dtr8z"/>`,
		"fallback": "la:safari",
	});
}

export default Component;
