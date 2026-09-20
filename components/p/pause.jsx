import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk6t47z6r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk6t47z6r"/>`,
		"fallback": "la:pause",
	});
}

export default Component;
