import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhm5lux_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhm5lux_q"/>`,
		"fallback": "streamline:receipt-subtract-remix",
	});
}

export default Component;
