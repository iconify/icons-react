import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-r_n7yft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-r_n7yft"/>`,
		"fallback": "game-icons:pterodactylus",
	});
}

export default Component;
