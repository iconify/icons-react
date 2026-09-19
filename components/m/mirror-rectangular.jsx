import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bw-2lvq9s.css';
import '../../css/l/lz3y2k4-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bw-2lvq9s"/><path class="lz3y2k4-g"/></g>`,
		"fallback": "hugeicons:mirror-rectangular",
	});
}

export default Component;
