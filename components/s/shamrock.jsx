import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzjlihbdq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jomn23bik.css';
import '../../css/w/w0g0foxru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzjlihbdq"/><g class="jn8qy4bru"><path class="jomn23bik"/><path class="w0g0foxru"/></g>`,
		"fallback": "openmoji:shamrock",
	});
}

export default Component;
