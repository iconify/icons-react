import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh1-gqbnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh1-gqbnh"/>`,
		"fallback": "game-icons:mooring-bollard",
	});
}

export default Component;
