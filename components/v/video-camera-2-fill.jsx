import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb5c5ou6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb5c5ou6v"/>`,
		"fallback": "mingcute:video-camera-2-fill",
	});
}

export default Component;
