import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea9jj1p6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea9jj1p6e"/>`,
		"fallback": "ion:ios-arrow-left",
	});
}

export default Component;
