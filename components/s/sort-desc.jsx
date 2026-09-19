import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrpqgccob.css';

const viewBox = {"width":1024,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1344) scale(1 -1)"><path class="yrpqgccob"/></g>`,
		"fallback": "fa:sort-desc",
	});
}

export default Component;
