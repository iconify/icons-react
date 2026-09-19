import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3doxobej.css';
import '../../css/c/czogqxb4f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3doxobej"/><path class="czogqxb4f"/>`,
		"fallback": "ep:mute-notification",
	});
}

export default Component;
