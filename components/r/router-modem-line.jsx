import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n33mwg7_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n33mwg7_b"/>`,
		"fallback": "mingcute:router-modem-line",
	});
}

export default Component;
