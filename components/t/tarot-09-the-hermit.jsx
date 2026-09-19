import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-of5g6ba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-of5g6ba"/>`,
		"fallback": "game-icons:tarot-09-the-hermit",
	});
}

export default Component;
