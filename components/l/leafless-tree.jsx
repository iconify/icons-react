import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck6hbebso.css';
import '../../css/p/pyc3or-ye.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a9kxyaczp.css';
import '../../css/t/tf4bz9k0m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck6hbebso"/><path class="pyc3or-ye"/><g class="jn8qy4bru"><path class="a9kxyaczp"/><path class="tf4bz9k0m"/></g>`,
		"fallback": "openmoji:leafless-tree",
	});
}

export default Component;
