import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st6matk8b.css';

const viewBox = {"width":768,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1728) scale(1 -1)"><path class="st6matk8b"/></g>`,
		"fallback": "fa:long-arrow-down",
	});
}

export default Component;
