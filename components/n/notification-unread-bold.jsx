import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyj-90b1w.css';
import '../../css/b/b133qtshg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyj-90b1w"/><path class="b133qtshg"/>`,
		"fallback": "solar:notification-unread-bold",
	});
}

export default Component;
