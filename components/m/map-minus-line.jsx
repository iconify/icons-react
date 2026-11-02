import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3ri3jblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3ri3jblr"/>`,
		"fallback": "mingcute:map-minus-line",
	});
}

export default Component;
