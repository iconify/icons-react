import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8o-9r21e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8o-9r21e"/>`,
		"fallback": "game-icons:old-king",
	});
}

export default Component;
