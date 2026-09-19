import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo4o7cler.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo4o7cler"/>`,
		"fallback": "game-icons:interdiction",
	});
}

export default Component;
