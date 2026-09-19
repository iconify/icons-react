import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojqan9b4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojqan9b4r"/>`,
		"fallback": "ion:ios-printer-outline",
	});
}

export default Component;
