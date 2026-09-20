import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdx3f7b5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdx3f7b5d"/>`,
		"fallback": "la:times",
	});
}

export default Component;
