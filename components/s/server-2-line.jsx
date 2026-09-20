import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swi7bqb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swi7bqb1c"/>`,
		"fallback": "mingcute:server-2-line",
	});
}

export default Component;
