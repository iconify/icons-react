import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ooax0ab2a.css';
import '../../css/w/wt8crubuj.css';
import '../../css/d/d_6sdrbtw.css';
import '../../css/x/xqtseob8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ooax0ab2a wm-k"/><path class="wm-k wt8crubuj"/><path class="d_6sdrbtw wm-a"/><path class="wm-deco xqtseob8h"/></g>`,
		"fallback": "withicons:toran-gloss",
	});
}

export default Component;
