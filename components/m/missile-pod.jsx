import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri7kwcc0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri7kwcc0e"/>`,
		"fallback": "game-icons:missile-pod",
	});
}

export default Component;
