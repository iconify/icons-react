import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7fu7w2an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7fu7w2an"/>`,
		"fallback": "mynaui:letter-h-square-solid",
	});
}

export default Component;
