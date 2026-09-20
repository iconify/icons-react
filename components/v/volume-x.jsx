import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt5zlcqpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt5zlcqpf"/>`,
		"fallback": "mynaui:volume-x",
	});
}

export default Component;
