import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgiee2z-d.css';
import '../../css/g/gkrxsvb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dgiee2z-d wm-k"/><path class="gkrxsvb2x wm-s"/></g>`,
		"fallback": "withicons:lightbulb-off-gloss",
	});
}

export default Component;
