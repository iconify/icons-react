import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifk-m6b3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifk-m6b3z"/>`,
		"fallback": "game-icons:spinal-coil",
	});
}

export default Component;
