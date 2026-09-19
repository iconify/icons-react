import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s82z5ebmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s82z5ebmn"/>`,
		"fallback": "game-icons:shrimp",
	});
}

export default Component;
