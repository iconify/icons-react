import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez9s18yps.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez9s18yps"/>`,
		"fallback": "carbon:pricing-traditional",
	});
}

export default Component;
