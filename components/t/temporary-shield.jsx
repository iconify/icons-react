import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps73hmllh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps73hmllh"/>`,
		"fallback": "game-icons:temporary-shield",
	});
}

export default Component;
