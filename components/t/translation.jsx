import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r-i1p99qp.css';
import '../../css/r/ry_lfzbyk.css';
import '../../css/a/atu28abtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r-i1p99qp"/><path class="ry_lfzbyk"/><path class="atu28abtz"/></g>`,
		"fallback": "hugeicons:translation",
	});
}

export default Component;
