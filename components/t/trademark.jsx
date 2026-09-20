import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1y2nlbbi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1y2nlbbi"/>`,
		"fallback": "la:trademark",
	});
}

export default Component;
