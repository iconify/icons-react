import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0_00t29z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0_00t29z"/>`,
		"fallback": "game-icons:tarot-14-temperance",
	});
}

export default Component;
