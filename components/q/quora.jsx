import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cblm0_q7x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cblm0_q7x"/>`,
		"fallback": "la:quora",
	});
}

export default Component;
