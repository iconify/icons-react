import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkiv8bcez.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkiv8bcez"/>`,
		"fallback": "fa7-regular:lemon",
	});
}

export default Component;
