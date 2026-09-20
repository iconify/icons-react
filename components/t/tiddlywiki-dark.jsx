import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pga6wlxad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pga6wlxad"/>`,
		"fallback": "selfhst:tiddlywiki-dark",
	});
}

export default Component;
