import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whmsbhbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whmsbhbqz"/>`,
		"fallback": "weui:sticker-outlined",
	});
}

export default Component;
