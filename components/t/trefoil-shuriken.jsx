import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnas29efh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnas29efh"/>`,
		"fallback": "game-icons:trefoil-shuriken",
	});
}

export default Component;
