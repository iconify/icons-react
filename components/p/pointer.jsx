import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6iivnbuo.css';

const viewBox = {"width":638,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6iivnbuo"/>`,
		"fallback": "ls:pointer",
	});
}

export default Component;
