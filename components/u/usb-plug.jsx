import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5l0wgc-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5l0wgc-b"/>`,
		"fallback": "bi:usb-plug",
	});
}

export default Component;
