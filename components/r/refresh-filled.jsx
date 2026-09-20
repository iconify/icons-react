import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc2f8fcca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc2f8fcca"/>`,
		"fallback": "weui:refresh-filled",
	});
}

export default Component;
