import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8e47hb4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8e47hb4q"/>`,
		"fallback": "game-icons:rally-the-troops",
	});
}

export default Component;
