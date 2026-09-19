import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfq8mhbnr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfq8mhbnr"/>`,
		"fallback": "game-icons:razor",
	});
}

export default Component;
