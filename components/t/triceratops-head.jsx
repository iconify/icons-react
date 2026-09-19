import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia0pqwm9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia0pqwm9d"/>`,
		"fallback": "game-icons:triceratops-head",
	});
}

export default Component;
