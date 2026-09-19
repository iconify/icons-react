import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewu4g9brn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewu4g9brn"/>`,
		"fallback": "ion:ios-arrow-up",
	});
}

export default Component;
