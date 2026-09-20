import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edgr8yixw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edgr8yixw"/>`,
		"fallback": "streamline:travel-airport-take-off-travel-plane-adventure-airplane-take-off",
	});
}

export default Component;
