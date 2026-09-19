import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4dusbhb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu4dusbhb"/>`,
		"fallback": "game-icons:monk-face",
	});
}

export default Component;
