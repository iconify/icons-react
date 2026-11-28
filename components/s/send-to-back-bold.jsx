import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7flwxcck.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7flwxcck"/>`,
		"fallback": "pullo:send-to-back-bold",
	});
}

export default Component;
