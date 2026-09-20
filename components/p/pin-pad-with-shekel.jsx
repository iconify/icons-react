import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f40os-3wh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f40os-3wh"/>`,
		"fallback": "pinhead:pin-pad-with-shekel",
	});
}

export default Component;
