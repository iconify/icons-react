import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nimvi2b3e.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nimvi2b3e"/>`,
		"fallback": "whh:thlarge",
	});
}

export default Component;
