import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s797cwbdo.css';
import '../../css/v/vc30dabbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s797cwbdo wm-k"/><path class="vc30dabbb wm-a"/></g>`,
		"fallback": "withicons:plane-landing-gloss",
	});
}

export default Component;
