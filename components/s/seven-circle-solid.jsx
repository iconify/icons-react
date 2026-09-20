import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucj6lf7oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucj6lf7oo"/>`,
		"fallback": "mynaui:seven-circle-solid",
	});
}

export default Component;
