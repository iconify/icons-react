import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uka6usb2f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uka6usb2f"/>`,
		"fallback": "icons8:upload",
	});
}

export default Component;
