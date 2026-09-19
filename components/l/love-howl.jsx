import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkttb8gxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkttb8gxi"/>`,
		"fallback": "game-icons:love-howl",
	});
}

export default Component;
