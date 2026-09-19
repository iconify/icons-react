import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk2-8rbie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk2-8rbie"/>`,
		"fallback": "game-icons:sheep",
	});
}

export default Component;
