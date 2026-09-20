import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo6pl3bui.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo6pl3bui"/>`,
		"fallback": "streamline:programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev",
	});
}

export default Component;
