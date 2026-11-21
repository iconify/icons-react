import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2do7bc4s.css';
import '../../css/o/o9o6s77ky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2do7bc4s"/><path class="o9o6s77ky"/>`,
		"fallback": "ion:restaurant-outline",
	});
}

export default Component;
