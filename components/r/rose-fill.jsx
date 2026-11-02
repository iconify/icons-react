import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yue4s31ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yue4s31ro"/>`,
		"fallback": "mingcute:rose-fill",
	});
}

export default Component;
