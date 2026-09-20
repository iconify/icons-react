import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9jf8abrh.css';
import '../../css/j/jt0p6rbhk.css';
import '../../css/v/vkxaytb_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9jf8abrh"/><path class="jt0p6rbhk"/><path class="vkxaytb_e"/></g>`,
		"fallback": "streamline-color:piggy-bank",
	});
}

export default Component;
