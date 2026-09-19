import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad83mhbso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad83mhbso"/>`,
		"fallback": "game-icons:triple-beak",
	});
}

export default Component;
