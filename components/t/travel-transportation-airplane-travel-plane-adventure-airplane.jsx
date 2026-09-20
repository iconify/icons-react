import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp9o_9agn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp9o_9agn"/>`,
		"fallback": "streamline:travel-transportation-airplane-travel-plane-adventure-airplane",
	});
}

export default Component;
