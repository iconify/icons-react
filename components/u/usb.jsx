import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrox0xb4l.css';

const viewBox = {"width":2304,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrox0xb4l"/>`,
		"fallback": "fa:usb",
	});
}

export default Component;
