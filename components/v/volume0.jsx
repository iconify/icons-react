import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj90b9bcn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj90b9bcn"/>`,
		"fallback": "raphael:volume0",
	});
}

export default Component;
