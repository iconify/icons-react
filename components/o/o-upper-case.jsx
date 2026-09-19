import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw1s4i0cl.css';

const viewBox = {"width":794,"height":775};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw1s4i0cl"/>`,
		"fallback": "ls:o-upper-case",
	});
}

export default Component;
