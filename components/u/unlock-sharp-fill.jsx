import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gfqmhpylk.css';
import '../../css/d/d-2r4nbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gfqmhpylk"/><path clip-rule="evenodd" class="d-2r4nbvo"/></g>`,
		"fallback": "keyline-icons:unlock-sharp-fill",
	});
}

export default Component;
