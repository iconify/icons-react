import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuggqv5-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuggqv5-p"/>`,
		"fallback": "mynaui:letter-x-circle-solid",
	});
}

export default Component;
