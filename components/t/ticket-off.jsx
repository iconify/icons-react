import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fodvy5bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fodvy5bgi"/>`,
		"fallback": "mynaui:ticket-off",
	});
}

export default Component;
