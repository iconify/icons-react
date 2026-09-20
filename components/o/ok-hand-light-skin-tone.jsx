import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l40bv4b_y.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/qy_11ccqc.css';
import '../../css/z/zq6rwnbei.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l40bv4b_y"/><g class="jn8qy4bru"><path class="qy_11ccqc"/><path class="zq6rwnbei"/></g>`,
		"fallback": "openmoji:ok-hand-light-skin-tone",
	});
}

export default Component;
