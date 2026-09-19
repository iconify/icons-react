import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p541ors4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p541ors4h"/>`,
		"fallback": "game-icons:kevlar",
	});
}

export default Component;
