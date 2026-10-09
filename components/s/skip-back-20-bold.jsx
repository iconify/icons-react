import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5v661b1o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5v661b1o"/>`,
		"fallback": "energy-icons:skip-back-20-bold",
	});
}

export default Component;
