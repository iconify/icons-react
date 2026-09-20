import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itj0e37iy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itj0e37iy"/>`,
		"fallback": "la:palette",
	});
}

export default Component;
