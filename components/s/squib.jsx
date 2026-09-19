import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll968lbbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll968lbbz"/>`,
		"fallback": "game-icons:squib",
	});
}

export default Component;
