import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pyyynhfqd.css';
import '../../css/f/f6hdfiifw.css';
import '../../css/j/j7hywqb8i.css';
import '../../css/u/u7cc7wb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pyyynhfqd"/><path class="f6hdfiifw"/><path class="j7hywqb8i"/><path class="u7cc7wb7d"/></g>`,
		"fallback": "hugeicons:mouse-left-click-01",
	});
}

export default Component;
