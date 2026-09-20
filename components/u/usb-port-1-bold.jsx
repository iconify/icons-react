import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxbsrubkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxbsrubkq"/>`,
		"fallback": "streamline-ultimate:usb-port-1-bold",
	});
}

export default Component;
