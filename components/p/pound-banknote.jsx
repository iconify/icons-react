import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wi4k2fb1c.css';
import '../../css/m/mi3q7-bth.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wi4k2fb1c"/><path class="mi3q7-bth"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pound-banknote",
	});
}

export default Component;
