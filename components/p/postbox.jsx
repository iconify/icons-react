import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8r4_rs2a.css';
import '../../css/g/gyotgab5u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q8r4_rs2a"/><path class="gyotgab5u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:postbox",
	});
}

export default Component;
