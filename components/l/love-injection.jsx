import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-w0-5vki.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-w0-5vki"/>`,
		"fallback": "game-icons:love-injection",
	});
}

export default Component;
