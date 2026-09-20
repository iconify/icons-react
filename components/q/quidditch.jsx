import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsbc26bbi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsbc26bbi"/>`,
		"fallback": "la:quidditch",
	});
}

export default Component;
