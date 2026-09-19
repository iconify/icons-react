import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg058abpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg058abpo"/>`,
		"fallback": "game-icons:oden",
	});
}

export default Component;
