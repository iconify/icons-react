import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt-eubb9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt-eubb9s"/>`,
		"fallback": "la:luggage-cart",
	});
}

export default Component;
