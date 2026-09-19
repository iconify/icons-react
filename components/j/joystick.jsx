import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dcuwplbzn.css';
import '../../css/a/ajo8vywwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dcuwplbzn"/><path class="ajo8vywwx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:joystick",
	});
}

export default Component;
