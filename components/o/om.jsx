import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1kek3bvu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1kek3bvu"/>`,
		"fallback": "la:om",
	});
}

export default Component;
