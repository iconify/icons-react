import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fv5a4ub5s.css';
import '../../css/y/ybfoqibmr.css';
import '../../css/h/h0-dxg_hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fv5a4ub5s"/><path class="ybfoqibmr"/><path class="h0-dxg_hl"/></g>`,
		"fallback": "streamline-freehand:task-list-clipboard-favorite-star",
	});
}

export default Component;
