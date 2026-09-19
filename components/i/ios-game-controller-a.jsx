import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd21t8b0d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd21t8b0d"/>`,
		"fallback": "ion:ios-game-controller-a",
	});
}

export default Component;
