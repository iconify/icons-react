import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_k0w1bio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_k0w1bio"/>`,
		"fallback": "subway:sms-9",
	});
}

export default Component;
