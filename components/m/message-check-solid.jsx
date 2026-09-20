import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx0ez053t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx0ez053t"/>`,
		"fallback": "mynaui:message-check-solid",
	});
}

export default Component;
