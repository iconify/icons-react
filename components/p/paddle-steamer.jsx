import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdwvp9b-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdwvp9b-h"/>`,
		"fallback": "game-icons:paddle-steamer",
	});
}

export default Component;
