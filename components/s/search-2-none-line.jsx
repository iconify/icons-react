import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snbezvl1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snbezvl1l"/>`,
		"fallback": "mingcute:search-2-none-line",
	});
}

export default Component;
