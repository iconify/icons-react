import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikzuh16qp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikzuh16qp"/>`,
		"fallback": "zondicons:travel-bus",
	});
}

export default Component;
