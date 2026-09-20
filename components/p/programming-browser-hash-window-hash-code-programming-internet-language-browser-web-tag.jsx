import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez0sud78k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez0sud78k"/>`,
		"fallback": "streamline:programming-browser-hash-window-hash-code-programming-internet-language-browser-web-tag",
	});
}

export default Component;
