import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t145a5obr.css';
import '../../css/k/k29615b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t145a5obr"/><path class="k29615b7v"/></g>`,
		"fallback": "hugeicons:scissor",
	});
}

export default Component;
