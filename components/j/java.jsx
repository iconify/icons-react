import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntpgoacpr.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntpgoacpr"/>`,
		"fallback": "fa6-brands:java",
	});
}

export default Component;
