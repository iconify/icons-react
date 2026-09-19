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
		"content": `<path class="yrpqgccob"/>`,
		"fallback": "fa:sort-asc",
	});
}

export default Component;
