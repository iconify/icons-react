import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0h0i5bdv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0h0i5bdv"/>`,
		"fallback": "ion:ios-arrow-forward",
	});
}

export default Component;
