import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqz3f3blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqz3f3blu"/>`,
		"fallback": "game-icons:over-infinity",
	});
}

export default Component;
