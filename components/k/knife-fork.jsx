import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6k88_b8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6k88_b8w"/>`,
		"fallback": "game-icons:knife-fork",
	});
}

export default Component;
