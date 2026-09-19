import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9wx0ebay.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9wx0ebay"/>`,
		"fallback": "f7:square-arrow-down-on-square",
	});
}

export default Component;
