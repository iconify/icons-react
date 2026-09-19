import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aywe44bzw.css';

const viewBox = {"width":380,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aywe44bzw"/>`,
		"fallback": "il:small-arrow-down",
	});
}

export default Component;
