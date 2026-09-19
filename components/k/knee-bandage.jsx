import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjn8q6b8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjn8q6b8o"/>`,
		"fallback": "game-icons:knee-bandage",
	});
}

export default Component;
