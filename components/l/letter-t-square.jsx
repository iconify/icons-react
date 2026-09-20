import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsc84ccge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsc84ccge"/>`,
		"fallback": "mynaui:letter-t-square",
	});
}

export default Component;
