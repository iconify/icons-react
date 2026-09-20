import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hixc0gbky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hixc0gbky"/>`,
		"fallback": "selfhst:nyt-crossword-light",
	});
}

export default Component;
