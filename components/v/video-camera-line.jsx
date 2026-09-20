import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbkmpjbyx.css';
import '../../css/a/ag9gbdcug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbkmpjbyx"/><path class="ag9gbdcug"/>`,
		"fallback": "mingcute:video-camera-line",
	});
}

export default Component;
