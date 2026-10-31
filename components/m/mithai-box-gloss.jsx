import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z2e2oz1-e.css';
import '../../css/y/ykdf9rbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k z2e2oz1-e"/><path class="wm-a ykdf9rbcl"/></g>`,
		"fallback": "withicons:mithai-box-gloss",
	});
}

export default Component;
