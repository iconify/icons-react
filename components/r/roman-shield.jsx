import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fob3lobvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fob3lobvv"/>`,
		"fallback": "game-icons:roman-shield",
	});
}

export default Component;
