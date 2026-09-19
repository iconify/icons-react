import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu34v8bwr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu34v8bwr"/>`,
		"fallback": "fa7-brands:phoenix-framework",
	});
}

export default Component;
