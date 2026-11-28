import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otd380onp.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otd380onp"/>`,
		"fallback": "pullo:text-wrap-fill",
	});
}

export default Component;
