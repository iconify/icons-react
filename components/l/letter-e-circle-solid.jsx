import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9kw68b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9kw68b_q"/>`,
		"fallback": "mynaui:letter-e-circle-solid",
	});
}

export default Component;
