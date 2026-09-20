import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbwan9bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbwan9bai"/>`,
		"fallback": "mynaui:volume-plus",
	});
}

export default Component;
