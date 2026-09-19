import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpmiw8bha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpmiw8bha"/>`,
		"fallback": "game-icons:lockers",
	});
}

export default Component;
