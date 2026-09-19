import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en51l1bxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en51l1bxd"/>`,
		"fallback": "game-icons:inverted-dice-6",
	});
}

export default Component;
