import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6rd46bfh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6rd46bfh"/>`,
		"fallback": "ion:ios-grid-view-outline",
	});
}

export default Component;
