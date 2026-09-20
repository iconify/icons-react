import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnz5anbch.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnz5anbch"/>`,
		"fallback": "la:object-ungroup-solid",
	});
}

export default Component;
