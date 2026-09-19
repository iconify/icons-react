import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yu1goj77a.css';
import '../../css/a/au7sajkdv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yu1goj77a"/><path class="au7sajkdv"/></g>`,
		"fallback": "bi:sign-dead-end-fill",
	});
}

export default Component;
