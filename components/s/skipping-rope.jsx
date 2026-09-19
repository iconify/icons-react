import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o_m5rgb_q.css';
import '../../css/f/fg12iorsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o_m5rgb_q"/><path class="fg12iorsq"/></g>`,
		"fallback": "hugeicons:skipping-rope",
	});
}

export default Component;
