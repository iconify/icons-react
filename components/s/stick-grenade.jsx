import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy9pxwbmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy9pxwbmg"/>`,
		"fallback": "game-icons:stick-grenade",
	});
}

export default Component;
