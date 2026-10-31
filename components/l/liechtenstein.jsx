import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu1egz7of.css';
import '../../css/q/qtcpzxb0n.css';
import '../../css/w/w4qkzcb1e.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu1egz7of"/><path class="qtcpzxb0n"/><path class="w4qkzcb1e"/>`,
		"fallback": "tabler-flags:liechtenstein",
	});
}

export default Component;
