import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9eo-ujzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9eo-ujzb"/>`,
		"fallback": "la:list",
	});
}

export default Component;
