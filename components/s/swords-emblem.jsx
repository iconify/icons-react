import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-ef07b7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-ef07b7w"/>`,
		"fallback": "game-icons:swords-emblem",
	});
}

export default Component;
