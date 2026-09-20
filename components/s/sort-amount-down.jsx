import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onkjj_flp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onkjj_flp"/>`,
		"fallback": "la:sort-amount-down",
	});
}

export default Component;
