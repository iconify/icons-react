import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0qf3nb6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0qf3nb6e"/>`,
		"fallback": "game-icons:slalom",
	});
}

export default Component;
