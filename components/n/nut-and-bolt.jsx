import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd4t30x-e.css';
import '../../css/q/qv-3h3qsp.css';
import '../../css/n/noh367bdh.css';
import '../../css/s/sx4huzrzr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/b2e_3_bqx.css';
import '../../css/e/e_5vrebnx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd4t30x-e"/><path class="qv-3h3qsp"/><path class="noh367bdh"/><path class="sx4huzrzr"/><g class="jn8qy4bru"><path class="b2e_3_bqx"/><path class="e_5vrebnx"/></g>`,
		"fallback": "openmoji:nut-and-bolt",
	});
}

export default Component;
