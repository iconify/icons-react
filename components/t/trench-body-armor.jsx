import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ply8xkbwc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ply8xkbwc"/>`,
		"fallback": "game-icons:trench-body-armor",
	});
}

export default Component;
