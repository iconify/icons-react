import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra116g8gq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra116g8gq"/>`,
		"fallback": "game-icons:tiara",
	});
}

export default Component;
