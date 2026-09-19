import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh145ccko.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh145ccko"/>`,
		"fallback": "fa6-solid:lemon",
	});
}

export default Component;
