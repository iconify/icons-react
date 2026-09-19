import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2515opfd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2515opfd"/>`,
		"fallback": "ion:ios-heart",
	});
}

export default Component;
