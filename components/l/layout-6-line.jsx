import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6om7i3xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6om7i3xj"/>`,
		"fallback": "mingcute:layout-6-line",
	});
}

export default Component;
