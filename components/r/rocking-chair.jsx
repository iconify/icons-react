import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-mvib1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-mvib1r"/>`,
		"fallback": "game-icons:rocking-chair",
	});
}

export default Component;
