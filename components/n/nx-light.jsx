import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p00b0weyb.css';

const viewBox = {"width":150,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p00b0weyb"/>`,
		"fallback": "thesvg-color:nx-light",
	});
}

export default Component;
