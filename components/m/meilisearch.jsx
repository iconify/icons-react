import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5dh6hawh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5dh6hawh"/>`,
		"fallback": "thesvg:meilisearch",
	});
}

export default Component;
