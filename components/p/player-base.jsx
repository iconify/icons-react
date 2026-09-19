import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp2mo1bbr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp2mo1bbr"/>`,
		"fallback": "game-icons:player-base",
	});
}

export default Component;
