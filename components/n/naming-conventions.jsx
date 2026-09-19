import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su4tvivsb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su4tvivsb"/>`,
		"fallback": "carbon:naming-conventions",
	});
}

export default Component;
