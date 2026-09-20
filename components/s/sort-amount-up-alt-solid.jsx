import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny1r5jixv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny1r5jixv"/>`,
		"fallback": "la:sort-amount-up-alt-solid",
	});
}

export default Component;
