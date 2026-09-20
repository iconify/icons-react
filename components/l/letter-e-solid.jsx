import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysdxcb4af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysdxcb4af"/>`,
		"fallback": "mynaui:letter-e-solid",
	});
}

export default Component;
