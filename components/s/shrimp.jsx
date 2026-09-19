import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir91d7qdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir91d7qdr"/>`,
		"fallback": "fa6-solid:shrimp",
	});
}

export default Component;
