import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-6wdt8ra.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-6wdt8ra"/>`,
		"fallback": "fa7-solid:volume",
	});
}

export default Component;
