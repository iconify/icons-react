import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikq9_k5ko.css';

const viewBox = {"width":1760,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikq9_k5ko"/>`,
		"fallback": "fa:sort-amount-desc",
	});
}

export default Component;
