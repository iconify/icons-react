import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj95-8veb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj95-8veb"/>`,
		"fallback": "mynaui:letter-n-waves-solid",
	});
}

export default Component;
