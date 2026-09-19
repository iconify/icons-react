import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4hz6q9ur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4hz6q9ur"/>`,
		"fallback": "game-icons:sword-array",
	});
}

export default Component;
