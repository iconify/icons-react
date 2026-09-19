import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph7ykzefy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph7ykzefy"/>`,
		"fallback": "game-icons:kenya",
	});
}

export default Component;
