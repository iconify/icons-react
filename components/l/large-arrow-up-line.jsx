import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1-qxeb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1-qxeb8c"/>`,
		"fallback": "mingcute:large-arrow-up-line",
	});
}

export default Component;
