import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjx98-60m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjx98-60m"/>`,
		"fallback": "mingcute:vip-4-line",
	});
}

export default Component;
