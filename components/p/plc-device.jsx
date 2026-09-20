import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8l78ubrk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8l78ubrk"/>`,
		"fallback": "ix:plc-device",
	});
}

export default Component;
