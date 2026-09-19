import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8a2d4biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8a2d4biq"/>`,
		"fallback": "game-icons:tarot-07-the-chariot",
	});
}

export default Component;
