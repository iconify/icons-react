import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsfc7lqru.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsfc7lqru"/>`,
		"fallback": "topcoat:plus",
	});
}

export default Component;
