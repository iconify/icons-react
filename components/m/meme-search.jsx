import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl1v7pbao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl1v7pbao"/>`,
		"fallback": "selfhst:meme-search",
	});
}

export default Component;
