import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd2lk3b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd2lk3b2z"/>`,
		"fallback": "mdi:notifications-active",
	});
}

export default Component;
