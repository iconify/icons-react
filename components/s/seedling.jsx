import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hil72j73a.css';
import '../../css/j/ji2y3-dyw.css';
import '../../css/u/ub6hd3a0n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hil72j73a"/><path class="ji2y3-dyw"/><path class="ub6hd3a0n"/>`,
		"fallback": "openmoji:seedling",
	});
}

export default Component;
