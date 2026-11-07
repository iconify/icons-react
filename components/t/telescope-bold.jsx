import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0iwjtb9z.css';
import '../../css/w/wvdj1rwub.css';
import '../../css/n/nahr265oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0iwjtb9z"/><path class="wvdj1rwub"/><path class="nahr265oy"/>`,
		"fallback": "solar:telescope-bold",
	});
}

export default Component;
