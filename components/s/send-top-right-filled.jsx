import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ono-tjryk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ono-tjryk"/>`,
		"fallback": "ix:send-top-right-filled",
	});
}

export default Component;
