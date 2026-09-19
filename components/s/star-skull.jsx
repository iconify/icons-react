import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6d9-abro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6d9-abro"/>`,
		"fallback": "game-icons:star-skull",
	});
}

export default Component;
