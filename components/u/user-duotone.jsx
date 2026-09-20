import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/almx-3bqe.css';
import '../../css/p/pj45aqp3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="almx-3bqe"/><path class="pj45aqp3z"/></g>`,
		"fallback": "si:user-duotone",
	});
}

export default Component;
