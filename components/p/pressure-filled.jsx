import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv0lhnksd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv0lhnksd"/>`,
		"fallback": "carbon:pressure-filled",
	});
}

export default Component;
