import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k1xy1ttvm.css';
import '../../css/w/w_e3c8bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k1xy1ttvm"/><path class="w_e3c8bdq"/></g>`,
		"fallback": "hugeicons:panel-bottom",
	});
}

export default Component;
