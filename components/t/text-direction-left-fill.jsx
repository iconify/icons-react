import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qju7tw8fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qju7tw8fi"/>`,
		"fallback": "mingcute:text-direction-left-fill",
	});
}

export default Component;
