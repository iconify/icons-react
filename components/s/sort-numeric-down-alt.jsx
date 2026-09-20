import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utvkdt9ti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utvkdt9ti"/>`,
		"fallback": "la:sort-numeric-down-alt",
	});
}

export default Component;
