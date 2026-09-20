import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrxxgab7x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrxxgab7x"/>`,
		"fallback": "la:toggle-on-solid",
	});
}

export default Component;
