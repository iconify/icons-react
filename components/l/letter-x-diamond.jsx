import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ompx1cb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ompx1cb4i"/>`,
		"fallback": "mynaui:letter-x-diamond",
	});
}

export default Component;
