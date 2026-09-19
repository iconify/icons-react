import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le3c-acut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le3c-acut"/>`,
		"fallback": "game-icons:shrug",
	});
}

export default Component;
