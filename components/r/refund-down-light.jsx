import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvaf3v5na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvaf3v5na"/>`,
		"fallback": "lets-icons:refund-down-light",
	});
}

export default Component;
