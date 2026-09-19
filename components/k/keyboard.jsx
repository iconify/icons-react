import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k665-1bdr.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k665-1bdr"/>`,
		"fallback": "fa-solid:keyboard",
	});
}

export default Component;
