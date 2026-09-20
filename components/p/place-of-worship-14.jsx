import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oixz44knh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oixz44knh"/>`,
		"fallback": "osmic:place-of-worship-14",
	});
}

export default Component;
