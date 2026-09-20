import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8dj3yr0a.css';
import '../../css/e/ezp8usbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a8dj3yr0a"/><path class="ezp8usbmb"/></g>`,
		"fallback": "solar:notification-remove-bold",
	});
}

export default Component;
