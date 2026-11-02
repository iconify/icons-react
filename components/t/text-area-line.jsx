import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s64d5hbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s64d5hbcj"/>`,
		"fallback": "mingcute:text-area-line",
	});
}

export default Component;
