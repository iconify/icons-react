import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpeag11mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpeag11mw"/>`,
		"fallback": "mingcute:video-camera-2-line",
	});
}

export default Component;
