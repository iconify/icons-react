import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsq8u9wdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsq8u9wdi"/>`,
		"fallback": "fa6-solid:pen-to-square",
	});
}

export default Component;
