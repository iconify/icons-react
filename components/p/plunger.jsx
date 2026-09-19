import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3sb9ebks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3sb9ebks"/>`,
		"fallback": "game-icons:plunger",
	});
}

export default Component;
