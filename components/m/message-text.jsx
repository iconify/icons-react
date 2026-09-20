import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqq3632lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqq3632lu"/>`,
		"fallback": "mdi:message-text",
	});
}

export default Component;
