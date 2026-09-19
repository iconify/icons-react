import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dal1jpsba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dal1jpsba"/>`,
		"fallback": "game-icons:revolt",
	});
}

export default Component;
