import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e67ynw8_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e67ynw8_g"/>`,
		"fallback": "game-icons:surf-board",
	});
}

export default Component;
