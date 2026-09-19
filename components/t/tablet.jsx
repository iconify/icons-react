import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2w92b9qn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2w92b9qn"/>`,
		"fallback": "game-icons:tablet",
	});
}

export default Component;
