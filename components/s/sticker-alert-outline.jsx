import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yptj8wb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yptj8wb9w"/>`,
		"fallback": "mdi:sticker-alert-outline",
	});
}

export default Component;
