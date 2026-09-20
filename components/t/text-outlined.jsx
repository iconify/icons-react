import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4l3s8_di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4l3s8_di"/>`,
		"fallback": "weui:text-outlined",
	});
}

export default Component;
