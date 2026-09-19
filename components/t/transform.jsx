import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz6wm02jh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz6wm02jh"/>`,
		"fallback": "game-icons:transform",
	});
}

export default Component;
