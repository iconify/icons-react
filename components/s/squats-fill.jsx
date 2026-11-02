import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilai06dxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilai06dxn"/>`,
		"fallback": "mingcute:squats-fill",
	});
}

export default Component;
