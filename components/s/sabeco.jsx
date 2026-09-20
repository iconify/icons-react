import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll2orwbou.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/luok09b9t.css';

const viewBox = {"width":1563,"height":1428};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGd07GO19d" clipPathUnits="userSpaceOnUse"><path class="ll2orwbou"/></clipPath></defs><g clip-path="url(#SVGd07GO19d)" class="n1lsf0bnc"><path class="luok09b9t"/></g>`,
		"fallback": "thesvg:sabeco",
	});
}

export default Component;
