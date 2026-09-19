import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9-mh3b0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9-mh3b0u"/>`,
		"fallback": "game-icons:player-previous",
	});
}

export default Component;
