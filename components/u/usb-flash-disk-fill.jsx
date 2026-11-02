import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arw00qbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arw00qbxw"/>`,
		"fallback": "mingcute:usb-flash-disk-fill",
	});
}

export default Component;
