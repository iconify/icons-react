import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjx3lqb1n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjx3lqb1n"/>`,
		"fallback": "fa7-solid:square-poll-vertical",
	});
}

export default Component;
