import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk4oliu5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk4oliu5d"/>`,
		"fallback": "game-icons:magic-axe",
	});
}

export default Component;
