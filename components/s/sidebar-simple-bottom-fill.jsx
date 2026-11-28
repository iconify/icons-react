import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usbif_0ja.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usbif_0ja"/>`,
		"fallback": "pullo:sidebar-simple-bottom-fill",
	});
}

export default Component;
