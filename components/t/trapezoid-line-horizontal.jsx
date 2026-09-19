import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d5pdy5bnz.css';
import '../../css/l/l-t8ute4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d5pdy5bnz"/><path class="l-t8ute4j"/></g>`,
		"fallback": "hugeicons:trapezoid-line-horizontal",
	});
}

export default Component;
