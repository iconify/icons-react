import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em4hhg6ix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em4hhg6ix"/>`,
		"fallback": "game-icons:medal-skull",
	});
}

export default Component;
