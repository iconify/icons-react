import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcv_a1b5m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rcv_a1b5m"/>`,
		"fallback": "streamline:stock-remix",
	});
}

export default Component;
