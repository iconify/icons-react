import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7ipbbrfu.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7ipbbrfu"/>`,
		"fallback": "zmdi:pin-account",
	});
}

export default Component;
