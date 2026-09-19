import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwcunacxh.css';

const viewBox = {"width":770,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwcunacxh"/>`,
		"fallback": "whh:mapmarker",
	});
}

export default Component;
