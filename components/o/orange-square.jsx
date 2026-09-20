import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx2r13bpi.css';
import '../../css/q/qy2vo7bko.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx2r13bpi"/><path class="qy2vo7bko"/>`,
		"fallback": "openmoji:orange-square",
	});
}

export default Component;
