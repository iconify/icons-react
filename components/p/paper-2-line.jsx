import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt27gzbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt27gzbag"/>`,
		"fallback": "mingcute:paper-2-line",
	});
}

export default Component;
