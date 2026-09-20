import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcgo1w6kb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcgo1w6kb"/>`,
		"fallback": "selfhst:nyt-strands-dark",
	});
}

export default Component;
