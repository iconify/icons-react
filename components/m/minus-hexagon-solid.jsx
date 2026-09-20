import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh9bj1pjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh9bj1pjh"/>`,
		"fallback": "mynaui:minus-hexagon-solid",
	});
}

export default Component;
