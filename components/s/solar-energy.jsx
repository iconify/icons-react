import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnb6oiblm.css';
import '../../css/r/rreybl3mq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i-d783b6j.css';
import '../../css/w/w2kqwju0b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnb6oiblm"/><circle class="rreybl3mq"/><g class="jn8qy4bru"><path class="i-d783b6j"/><circle class="w2kqwju0b"/></g>`,
		"fallback": "openmoji:solar-energy",
	});
}

export default Component;
