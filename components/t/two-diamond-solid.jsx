import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htzdpg-mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htzdpg-mi"/>`,
		"fallback": "mynaui:two-diamond-solid",
	});
}

export default Component;
