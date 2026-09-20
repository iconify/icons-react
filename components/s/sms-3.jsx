import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysuq3zb1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysuq3zb1h"/>`,
		"fallback": "subway:sms-3",
	});
}

export default Component;
