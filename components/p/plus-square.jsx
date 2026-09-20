import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru3g04bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru3g04bdl"/>`,
		"fallback": "mynaui:plus-square",
	});
}

export default Component;
