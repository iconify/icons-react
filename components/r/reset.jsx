import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_8qcubwa.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_8qcubwa"/>`,
		"fallback": "iwwa:reset",
	});
}

export default Component;
