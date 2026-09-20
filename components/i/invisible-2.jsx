import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f44d5db6u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f44d5db6u"/>`,
		"fallback": "streamline-color:invisible-2",
	});
}

export default Component;
