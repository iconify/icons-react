import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhzql1b2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhzql1b2w"/>`,
		"fallback": "game-icons:shambling-zombie",
	});
}

export default Component;
