import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck6hbebso.css';
import '../../css/p/pyc3or-ye.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a9kxyaczp.css';
import '../../css/c/cuizu7_hg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck6hbebso"/><path class="pyc3or-ye"/><g class="jn8qy4bru"><path class="a9kxyaczp"/><path class="cuizu7_hg"/></g>`,
		"fallback": "openmoji:leafless-tree",
	});
}

export default Component;
