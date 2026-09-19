import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deq-q_bvq.css';
import '../../css/d/d98b5gbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="deq-q_bvq"/><path class="d98b5gbit"/></g>`,
		"fallback": "iconamoon:star-off-thin",
	});
}

export default Component;
