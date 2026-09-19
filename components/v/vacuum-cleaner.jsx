import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd0zuvb5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd0zuvb5s"/>`,
		"fallback": "game-icons:vacuum-cleaner",
	});
}

export default Component;
