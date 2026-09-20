import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nepuf8mxk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nepuf8mxk"/>`,
		"fallback": "la:train",
	});
}

export default Component;
