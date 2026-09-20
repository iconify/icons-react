import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysdv8ccms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysdv8ccms"/>`,
		"fallback": "mynaui:octagon-plus",
	});
}

export default Component;
