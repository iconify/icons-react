import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddkx88bye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddkx88bye"/>`,
		"fallback": "game-icons:ring-box",
	});
}

export default Component;
