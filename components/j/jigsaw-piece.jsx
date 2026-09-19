import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo25o29sc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo25o29sc"/>`,
		"fallback": "game-icons:jigsaw-piece",
	});
}

export default Component;
