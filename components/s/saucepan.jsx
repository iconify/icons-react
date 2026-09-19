import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiin5c7nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiin5c7nl"/>`,
		"fallback": "game-icons:saucepan",
	});
}

export default Component;
