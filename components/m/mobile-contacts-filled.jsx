import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsqayxb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsqayxb2l"/>`,
		"fallback": "weui:mobile-contacts-filled",
	});
}

export default Component;
