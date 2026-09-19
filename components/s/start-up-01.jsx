import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qyi84o_fy.css';
import '../../css/c/c1b25j7ao.css';
import '../../css/n/n1txf4mqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qyi84o_fy"/><path class="c1b25j7ao"/><path class="n1txf4mqn"/></g>`,
		"fallback": "hugeicons:start-up-01",
	});
}

export default Component;
