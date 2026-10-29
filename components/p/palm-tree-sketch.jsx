import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wp4knqb8q.css';
import '../../css/k/khnsq01cy.css';
import '../../css/i/i5xw9gqsb.css';
import '../../css/e/eaj47cc_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k wp4knqb8q"/><path class="khnsq01cy wm-a"/><path class="i5xw9gqsb wm-k"/><path class="eaj47cc_q wm-a"/></g>`,
		"fallback": "withicons:palm-tree-sketch",
	});
}

export default Component;
