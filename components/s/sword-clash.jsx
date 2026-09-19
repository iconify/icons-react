import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq8g_vbqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq8g_vbqn"/>`,
		"fallback": "game-icons:sword-clash",
	});
}

export default Component;
