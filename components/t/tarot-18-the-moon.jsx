import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imrkppwci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imrkppwci"/>`,
		"fallback": "game-icons:tarot-18-the-moon",
	});
}

export default Component;
