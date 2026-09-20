import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5exk6e-v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5exk6e-v"/>`,
		"fallback": "osmic:veterinary-14",
	});
}

export default Component;
