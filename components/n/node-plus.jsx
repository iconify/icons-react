import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5s6u5btl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5s6u5btl"/>`,
		"fallback": "bi:node-plus",
	});
}

export default Component;
