import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uma3x94ar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uma3x94ar"/>`,
		"fallback": "game-icons:mp5",
	});
}

export default Component;
