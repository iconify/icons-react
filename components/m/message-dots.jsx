import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncggv999k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncggv999k"/>`,
		"fallback": "meteor-icons:message-dots",
	});
}

export default Component;
