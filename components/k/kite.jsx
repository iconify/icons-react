import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpbjpac9g.css';
import '../../css/k/kgf0r7bvp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/ihxzzib8n.css';
import '../../css/h/h9t1rz7uy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpbjpac9g"/><path class="kgf0r7bvp"/><g class="jn8qy4bru"><path class="ihxzzib8n"/><path class="h9t1rz7uy"/></g>`,
		"fallback": "openmoji:kite",
	});
}

export default Component;
