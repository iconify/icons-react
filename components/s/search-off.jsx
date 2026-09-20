import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-jk7n77c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-jk7n77c"/>`,
		"fallback": "mynaui:search-off",
	});
}

export default Component;
