import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycpjbvd2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycpjbvd2z"/>`,
		"fallback": "mynaui:pyramid",
	});
}

export default Component;
