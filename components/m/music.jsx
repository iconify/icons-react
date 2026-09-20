import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usb8k9bys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usb8k9bys"/>`,
		"fallback": "raphael:music",
	});
}

export default Component;
