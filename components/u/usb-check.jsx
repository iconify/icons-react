import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usvxjnb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usvxjnb-m"/>`,
		"fallback": "noviair-light:usb-check",
	});
}

export default Component;
