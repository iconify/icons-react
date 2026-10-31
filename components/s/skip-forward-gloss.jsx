import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jr5f12b4o.css';
import '../../css/y/ybkho6b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jr5f12b4o wm-k"/><path class="wm-a ybkho6b_d"/></g>`,
		"fallback": "withicons:skip-forward-gloss",
	});
}

export default Component;
