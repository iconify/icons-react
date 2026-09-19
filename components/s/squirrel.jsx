import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt8eu321u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt8eu321u"/>`,
		"fallback": "game-icons:squirrel",
	});
}

export default Component;
