import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5w_fg8wp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5w_fg8wp"/>`,
		"fallback": "game-icons:shoulder-armor",
	});
}

export default Component;
