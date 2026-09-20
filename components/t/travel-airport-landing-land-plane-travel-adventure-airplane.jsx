import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2t3gzbxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2t3gzbxm"/>`,
		"fallback": "streamline:travel-airport-landing-land-plane-travel-adventure-airplane",
	});
}

export default Component;
