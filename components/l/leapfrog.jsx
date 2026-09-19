import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-3ufsavn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-3ufsavn"/>`,
		"fallback": "game-icons:leapfrog",
	});
}

export default Component;
