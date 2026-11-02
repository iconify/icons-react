import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2h23__hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2h23__hx"/>`,
		"fallback": "mingcute:mail-warning-line",
	});
}

export default Component;
