import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/ahvowobfe.css';
import '../../css/b/b3a5q61-y.css';
import '../../css/n/nc-22yz3n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jn8qy4bru"><path class="ahvowobfe"/><path class="b3a5q61-y"/><path class="nc-22yz3n"/></g>`,
		"fallback": "openmoji:linked-paperclips",
	});
}

export default Component;
