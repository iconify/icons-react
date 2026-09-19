import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivpju1dvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivpju1dvx"/>`,
		"fallback": "game-icons:shaking-hands",
	});
}

export default Component;
