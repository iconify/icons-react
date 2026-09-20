import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7kouvc9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7kouvc9t"/>`,
		"fallback": "la:long-arrow-alt-down-solid",
	});
}

export default Component;
