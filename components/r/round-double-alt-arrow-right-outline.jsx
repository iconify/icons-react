import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmqmq1lxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmqmq1lxy"/>`,
		"fallback": "solar:round-double-alt-arrow-right-outline",
	});
}

export default Component;
