import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4-3lbrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf4-3lbrm"/>`,
		"fallback": "ion:ios-information",
	});
}

export default Component;
