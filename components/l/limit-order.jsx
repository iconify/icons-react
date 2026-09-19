import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pp3v195nj.css';
import '../../css/e/eh39u_b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="pp3v195nj"/><path class="eh39u_b4o"/></g>`,
		"fallback": "hugeicons:limit-order",
	});
}

export default Component;
