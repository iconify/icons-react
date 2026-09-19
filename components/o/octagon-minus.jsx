import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o6d5x6bkk.css';
import '../../css/h/hj2v57bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o6d5x6bkk"/><path class="hj2v57bvh"/></g>`,
		"fallback": "hugeicons:octagon-minus",
	});
}

export default Component;
