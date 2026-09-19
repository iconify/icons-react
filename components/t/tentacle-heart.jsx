import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc6br1bwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc6br1bwd"/>`,
		"fallback": "game-icons:tentacle-heart",
	});
}

export default Component;
