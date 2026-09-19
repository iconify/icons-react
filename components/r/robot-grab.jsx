import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5x8k7b2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5x8k7b2h"/>`,
		"fallback": "game-icons:robot-grab",
	});
}

export default Component;
