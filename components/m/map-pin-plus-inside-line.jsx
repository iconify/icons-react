import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwo770bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwo770bzq"/>`,
		"fallback": "mingcute:map-pin-plus-inside-line",
	});
}

export default Component;
