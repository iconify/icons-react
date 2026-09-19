import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r68-v8-yh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r68-v8-yh"/>`,
		"fallback": "game-icons:move",
	});
}

export default Component;
