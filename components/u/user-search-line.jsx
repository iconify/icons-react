import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff9rqab3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff9rqab3b"/>`,
		"fallback": "ri:user-search-line",
	});
}

export default Component;
