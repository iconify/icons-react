import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrnzrzbbr.css';
import '../../css/h/h6m5ozxxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrnzrzbbr"/><path class="h6m5ozxxy"/>`,
		"fallback": "streamline-freehand:smartphone-app-widget-remove",
	});
}

export default Component;
