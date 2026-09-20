import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryn-zw0rr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ryn-zw0rr"/>`,
		"fallback": "streamline:payment-10-remix",
	});
}

export default Component;
