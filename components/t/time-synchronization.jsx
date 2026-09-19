import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5mkn8bzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5mkn8bzs"/>`,
		"fallback": "game-icons:time-synchronization",
	});
}

export default Component;
