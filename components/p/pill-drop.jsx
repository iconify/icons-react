import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx62a9nxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx62a9nxt"/>`,
		"fallback": "game-icons:pill-drop",
	});
}

export default Component;
