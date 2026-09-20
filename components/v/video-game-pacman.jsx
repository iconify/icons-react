import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3tro_brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3tro_brn"/>`,
		"fallback": "streamline-freehand:video-game-pacman",
	});
}

export default Component;
