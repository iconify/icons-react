import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8vl5s_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8vl5s_x"/>`,
		"fallback": "game-icons:microchip",
	});
}

export default Component;
