import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rrj1kby_k.css';
import '../../css/t/t3y5xxluy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rrj1kby_k wm-k"/><path class="t3y5xxluy wm-a"/></g>`,
		"fallback": "withicons:panel-right-close-gloss",
	});
}

export default Component;
