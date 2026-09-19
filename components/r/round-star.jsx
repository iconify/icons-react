import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkor7rb-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkor7rb-n"/>`,
		"fallback": "game-icons:round-star",
	});
}

export default Component;
