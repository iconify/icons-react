import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu2bemxoj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu2bemxoj"/>`,
		"fallback": "selfhst:nyt-wordle-dark",
	});
}

export default Component;
