import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntitz-80y.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ntitz-80y"/>`,
		"fallback": "lineicons:moon-half-right-5",
	});
}

export default Component;
