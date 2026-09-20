import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp37pgb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp37pgb8y"/>`,
		"fallback": "mingcute:substack-line",
	});
}

export default Component;
