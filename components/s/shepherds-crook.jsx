import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9zba1bid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9zba1bid"/>`,
		"fallback": "game-icons:shepherds-crook",
	});
}

export default Component;
