import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5h-cjbyh.css';
import '../../css/p/pwt17qidk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5h-cjbyh"/><path class="pwt17qidk"/></g>`,
		"fallback": "iconaut:joystick-solid",
	});
}

export default Component;
