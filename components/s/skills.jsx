import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfgh54_oh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfgh54_oh"/>`,
		"fallback": "game-icons:skills",
	});
}

export default Component;
