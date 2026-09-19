import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2fxy5pif.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2fxy5pif"/>`,
		"fallback": "icons8:last-quarter",
	});
}

export default Component;
