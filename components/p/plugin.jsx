import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvr0h0xiz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvr0h0xiz"/>`,
		"fallback": "raphael:plugin",
	});
}

export default Component;
