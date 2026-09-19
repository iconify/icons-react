import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azk1c0b3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azk1c0b3v"/>`,
		"fallback": "game-icons:tesla-turret",
	});
}

export default Component;
