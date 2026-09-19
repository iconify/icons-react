import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6dnwhibh.css';
import '../../css/s/s1ktrc_2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6dnwhibh"/><path class="s1ktrc_2x"/>`,
		"fallback": "boxicons:usb-filled",
	});
}

export default Component;
