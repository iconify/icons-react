import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h27oz2bun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h27oz2bun"/>`,
		"fallback": "game-icons:schrodingers-cat-dead",
	});
}

export default Component;
