import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5hqpcc7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5hqpcc7n"/>`,
		"fallback": "lineicons:jaguar",
	});
}

export default Component;
