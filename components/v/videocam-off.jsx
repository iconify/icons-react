import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex-4i4b2k.css';

const viewBox = {"width":408,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex-4i4b2k"/>`,
		"fallback": "zmdi:videocam-off",
	});
}

export default Component;
