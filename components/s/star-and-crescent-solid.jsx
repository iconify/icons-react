import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6qryzp-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6qryzp-n"/>`,
		"fallback": "la:star-and-crescent-solid",
	});
}

export default Component;
