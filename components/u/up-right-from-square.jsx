import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7dslyv0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7dslyv0h"/>`,
		"fallback": "fa6-solid:up-right-from-square",
	});
}

export default Component;
