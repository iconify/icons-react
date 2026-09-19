import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2heh2xxv.css';
import '../../css/j/jvvjw5_eb.css';
import '../../css/s/snapa_96j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2heh2xxv"/><path class="jvvjw5_eb"/><path class="snapa_96j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-raising-hand",
	});
}

export default Component;
