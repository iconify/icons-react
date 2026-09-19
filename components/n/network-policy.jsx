import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2_mk1czl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2_mk1czl"/>`,
		"fallback": "eos-icons:network-policy",
	});
}

export default Component;
