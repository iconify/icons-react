import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjl5j-b8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjl5j-b8q"/>`,
		"fallback": "game-icons:tentacles-skull",
	});
}

export default Component;
