import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk8uohblm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk8uohblm"/>`,
		"fallback": "game-icons:spyglass",
	});
}

export default Component;
