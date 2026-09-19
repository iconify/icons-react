import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csg4-9uxp.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csg4-9uxp"/>`,
		"fallback": "whh:usbplug",
	});
}

export default Component;
