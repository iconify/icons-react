import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zt0gceb0n.css';
import '../../css/o/o3oqjvb4j.css';
import '../../css/x/x-_389brr.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="bi12bsetm"><circle class="zt0gceb0n"/><path class="o3oqjvb4j"/><circle class="x-_389brr"/></g>`,
		"fallback": "system-uicons:question-circle",
	});
}

export default Component;
