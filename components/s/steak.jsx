import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgww5qb6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgww5qb6z"/>`,
		"fallback": "game-icons:steak",
	});
}

export default Component;
