import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp-t-xkfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp-t-xkfl"/>`,
		"fallback": "mingcute:love-line",
	});
}

export default Component;
