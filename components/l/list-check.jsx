import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqo96s-5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqo96s-5e"/>`,
		"fallback": "noviair-light:list-check",
	});
}

export default Component;
