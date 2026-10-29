import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sir6kksaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sir6kksaq"/>`,
		"fallback": "withicons:message-square-solid",
	});
}

export default Component;
