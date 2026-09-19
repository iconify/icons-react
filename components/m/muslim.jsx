import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-u0n-b_r.css';
import '../../css/b/b9je1lbtq.css';
import '../../css/v/vifoorb8h.css';
import '../../css/y/y0fkbccbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-u0n-b_r"/><path class="b9je1lbtq"/><path class="vifoorb8h"/><path class="y0fkbccbp"/></g>`,
		"fallback": "hugeicons:muslim",
	});
}

export default Component;
