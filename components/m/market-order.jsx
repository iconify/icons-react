import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/w/wjtjrpzmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="zv6cqnbnp"/><path class="wjtjrpzmg"/></g>`,
		"fallback": "hugeicons:market-order",
	});
}

export default Component;
