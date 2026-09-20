import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrga8r-gz.css';
import '../../css/f/fqxr8w82g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vrga8r-gz"/><path clip-rule="evenodd" class="fqxr8w82g"/></g>`,
		"fallback": "solar:sticker-smile-circle-2-bold",
	});
}

export default Component;
