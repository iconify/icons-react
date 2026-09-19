import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb4t3pbgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb4t3pbgw"/>`,
		"fallback": "game-icons:techno-heart",
	});
}

export default Component;
