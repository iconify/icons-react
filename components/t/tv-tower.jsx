import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drfiezb0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drfiezb0l"/>`,
		"fallback": "game-icons:tv-tower",
	});
}

export default Component;
