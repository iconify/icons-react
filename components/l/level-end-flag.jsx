import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8iorx6kd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8iorx6kd"/>`,
		"fallback": "game-icons:level-end-flag",
	});
}

export default Component;
