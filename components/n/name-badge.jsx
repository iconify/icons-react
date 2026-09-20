import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akr41tcoa.css';
import '../../css/i/ihrvc4brd.css';
import '../../css/b/b0_pq7qdh.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/ea1zdkbuj.css';
import '../../css/z/zhzvc4b-t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akr41tcoa"/><path class="ihrvc4brd"/><rect class="b0_pq7qdh"/><g class="jn8qy4bru"><path class="ea1zdkbuj"/><rect class="zhzvc4b-t"/></g>`,
		"fallback": "openmoji:name-badge",
	});
}

export default Component;
