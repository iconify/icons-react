import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-3j0bbbb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-3j0bbbb"/>`,
		"fallback": "picon:latex",
	});
}

export default Component;
