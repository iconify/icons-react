import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvw0jng_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvw0jng_e"/>`,
		"fallback": "game-icons:soap-experiment",
	});
}

export default Component;
