import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e76ndrbgg.css';

const viewBox = {"width":504,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e76ndrbgg"/>`,
		"fallback": "zmdi:network-wifi",
	});
}

export default Component;
