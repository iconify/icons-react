import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9lwr14yr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9lwr14yr"/>`,
		"fallback": "game-icons:pineapple",
	});
}

export default Component;
