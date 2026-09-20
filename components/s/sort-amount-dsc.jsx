import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9j7h1rxt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9j7h1rxt"/>`,
		"fallback": "lineicons:sort-amount-dsc",
	});
}

export default Component;
