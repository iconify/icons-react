import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-e4hr07v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-e4hr07v"/>`,
		"fallback": "subway:left-down-corner-arrow-1",
	});
}

export default Component;
