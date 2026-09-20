import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g057fib1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g057fib1s"/>`,
		"fallback": "mingcute:layout-9-fill",
	});
}

export default Component;
