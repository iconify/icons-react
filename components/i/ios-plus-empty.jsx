import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0-2cj3rc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0-2cj3rc"/>`,
		"fallback": "ion:ios-plus-empty",
	});
}

export default Component;
