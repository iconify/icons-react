import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqb8qjd1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqb8qjd1x"/>`,
		"fallback": "mingcute:paint-line",
	});
}

export default Component;
