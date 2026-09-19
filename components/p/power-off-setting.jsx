import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh7ab-y9b.css';

const viewBox = {"width":344,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh7ab-y9b"/>`,
		"fallback": "zmdi:power-off-setting",
	});
}

export default Component;
