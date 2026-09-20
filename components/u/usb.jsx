import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xogyj2ogj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xogyj2ogj"/>`,
		"fallback": "keyline-icons:usb",
	});
}

export default Component;
