import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_0r08bsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_0r08bsa"/>`,
		"fallback": "game-icons:wax-tablet",
	});
}

export default Component;
