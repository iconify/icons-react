import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d35w0wbdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d35w0wbdm"/>`,
		"fallback": "ion:ios-flag-outline",
	});
}

export default Component;
