import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d96z9pegl.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d96z9pegl"/>`,
		"fallback": "zmdi:pin-assistant",
	});
}

export default Component;
