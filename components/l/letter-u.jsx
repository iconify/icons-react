import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgff75bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgff75bbk"/>`,
		"fallback": "mynaui:letter-u",
	});
}

export default Component;
