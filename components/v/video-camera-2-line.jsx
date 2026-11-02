import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aad6nz3iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aad6nz3iu"/>`,
		"fallback": "mingcute:video-camera-2-line",
	});
}

export default Component;
