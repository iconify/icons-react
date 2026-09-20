import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb0r06b6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb0r06b6e"/>`,
		"fallback": "la:step-forward-solid",
	});
}

export default Component;
