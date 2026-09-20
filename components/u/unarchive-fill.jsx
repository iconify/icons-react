import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqvb-xbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqvb-xbze"/>`,
		"fallback": "mingcute:unarchive-fill",
	});
}

export default Component;
