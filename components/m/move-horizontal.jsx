import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whwdwc9ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whwdwc9ze"/>`,
		"fallback": "mynaui:move-horizontal",
	});
}

export default Component;
