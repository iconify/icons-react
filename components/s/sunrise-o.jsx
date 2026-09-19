import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbk84rbbr.css';

const viewBox = {"width":1792,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbk84rbbr"/>`,
		"fallback": "vs:sunrise-o",
	});
}

export default Component;
