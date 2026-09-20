import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrga8r-gz.css';
import '../../css/d/dzk5w4biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vrga8r-gz"/><path class="dzk5w4biy"/></g>`,
		"fallback": "solar:sticker-circle-bold-duotone",
	});
}

export default Component;
