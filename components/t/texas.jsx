import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9j73r6gt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9j73r6gt"/>`,
		"fallback": "game-icons:texas",
	});
}

export default Component;
