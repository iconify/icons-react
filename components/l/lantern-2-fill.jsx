import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ak44dhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ak44dhr"/>`,
		"fallback": "mingcute:lantern-2-fill",
	});
}

export default Component;
