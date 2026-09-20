import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8pkx9ste.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8pkx9ste"/>`,
		"fallback": "osmic:parking-car-14",
	});
}

export default Component;
