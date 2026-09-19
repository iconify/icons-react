import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-g5_2e4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-g5_2e4k"/>`,
		"fallback": "ion:ios-contact-outline",
	});
}

export default Component;
