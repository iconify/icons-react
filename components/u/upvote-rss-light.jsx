import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2k_pab-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2k_pab-g"/>`,
		"fallback": "selfhst:upvote-rss-light",
	});
}

export default Component;
