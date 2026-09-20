import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9g0b5k5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9g0b5k5e"/>`,
		"fallback": "osmic:spring-14",
	});
}

export default Component;
