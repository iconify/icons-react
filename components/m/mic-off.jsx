import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5q4pvb7e.css';

const viewBox = {"width":384,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5q4pvb7e"/>`,
		"fallback": "zmdi:mic-off",
	});
}

export default Component;
