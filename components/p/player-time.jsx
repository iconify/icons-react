import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_8ahf34c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_8ahf34c"/>`,
		"fallback": "game-icons:player-time",
	});
}

export default Component;
