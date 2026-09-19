import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdhp95gbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdhp95gbu"/>`,
		"fallback": "game-icons:stapler",
	});
}

export default Component;
