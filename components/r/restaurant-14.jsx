import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkdf8eh1k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkdf8eh1k"/>`,
		"fallback": "osmic:restaurant-14",
	});
}

export default Component;
