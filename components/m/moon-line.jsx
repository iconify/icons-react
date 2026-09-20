import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhge7bbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhge7bbqf"/>`,
		"fallback": "mingcute:moon-line",
	});
}

export default Component;
