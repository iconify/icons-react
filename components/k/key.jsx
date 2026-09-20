import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whtqf2epm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whtqf2epm"/>`,
		"fallback": "mynaui:key",
	});
}

export default Component;
