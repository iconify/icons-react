import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj7_ltb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj7_ltb7c"/>`,
		"fallback": "selfhst:nyt-mini-crossword-light",
	});
}

export default Component;
