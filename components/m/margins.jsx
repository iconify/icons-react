import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj2q0ybck.css';
import '../../css/r/rw1aaur7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vj2q0ybck"/><path clip-rule="evenodd" class="rw1aaur7o"/></g>`,
		"fallback": "andrsrxn:margins",
	});
}

export default Component;
