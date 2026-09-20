import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycd0-xbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycd0-xbkf"/>`,
		"fallback": "mynaui:signal-circle-solid",
	});
}

export default Component;
