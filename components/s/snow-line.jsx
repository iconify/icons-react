import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjvf8qbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjvf8qbrh"/>`,
		"fallback": "mingcute:snow-line",
	});
}

export default Component;
