import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hj2v57bvh.css';
import '../../css/h/h53efjkpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hj2v57bvh"/><path class="h53efjkpt"/></g>`,
		"fallback": "hugeicons:octagon-pause",
	});
}

export default Component;
