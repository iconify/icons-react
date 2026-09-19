import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/p/p4az6ozcm.css';
import '../../css/j/jgvb89ncz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="p4az6ozcm"/><path class="jgvb89ncz"/></g>`,
		"fallback": "hugeicons:volleyball",
	});
}

export default Component;
