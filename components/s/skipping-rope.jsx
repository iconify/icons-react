import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1rj6brxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1rj6brxy"/>`,
		"fallback": "game-icons:skipping-rope",
	});
}

export default Component;
