import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eigw6bc8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eigw6bc8q"/>`,
		"fallback": "game-icons:painted-pottery",
	});
}

export default Component;
