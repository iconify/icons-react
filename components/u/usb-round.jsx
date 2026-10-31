import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlro9p6ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlro9p6ts"/>`,
		"fallback": "coolicons:usb-round",
	});
}

export default Component;
