import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umbjv2blf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umbjv2blf"/>`,
		"fallback": "game-icons:peaks",
	});
}

export default Component;
