import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdfzpcc-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdfzpcc-z"/>`,
		"fallback": "mingcute:mqtt-line",
	});
}

export default Component;
