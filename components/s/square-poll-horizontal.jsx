import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7pdt0-gz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7pdt0-gz"/>`,
		"fallback": "fa6-solid:square-poll-horizontal",
	});
}

export default Component;
