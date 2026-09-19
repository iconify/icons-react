import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly-1yssge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly-1yssge"/>`,
		"fallback": "game-icons:pikeman",
	});
}

export default Component;
