import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo0zxtj6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo0zxtj6m"/>`,
		"fallback": "game-icons:lighter",
	});
}

export default Component;
