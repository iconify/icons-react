import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhemwg1as.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhemwg1as"/>`,
		"fallback": "cib:quora",
	});
}

export default Component;
