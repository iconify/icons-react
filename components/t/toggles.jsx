import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpnwm6bbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpnwm6bbo"/>`,
		"fallback": "game-icons:toggles",
	});
}

export default Component;
