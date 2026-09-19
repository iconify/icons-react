import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aesifltmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aesifltmi"/>`,
		"fallback": "game-icons:tarot-04-the-emperor",
	});
}

export default Component;
