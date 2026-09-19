import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l39_x8vnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l39_x8vnd"/>`,
		"fallback": "game-icons:saw-claw",
	});
}

export default Component;
