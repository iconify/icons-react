import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs5uddbss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs5uddbss"/>`,
		"fallback": "game-icons:two-coins",
	});
}

export default Component;
