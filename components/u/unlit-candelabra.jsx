import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynxt2hu3a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynxt2hu3a"/>`,
		"fallback": "game-icons:unlit-candelabra",
	});
}

export default Component;
