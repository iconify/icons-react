import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn8k11clr.css';
import '../../css/g/g_d1rsbwq.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/y/y-cylzbuw.css';
import '../../css/i/i5q586b1q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn8k11clr"/><path class="g_d1rsbwq"/><g class="dcqdxh5zc"><path class="y-cylzbuw"/><path class="i5q586b1q"/></g>`,
		"fallback": "openmoji:switch",
	});
}

export default Component;
