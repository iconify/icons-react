import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucqn0pb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ucqn0pb6e"/>`,
		"fallback": "streamline-freehand:video-game-tetris",
	});
}

export default Component;
