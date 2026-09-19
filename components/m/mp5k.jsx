import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft6uvzk5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft6uvzk5r"/>`,
		"fallback": "game-icons:mp5k",
	});
}

export default Component;
