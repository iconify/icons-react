import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kbgg_hbee.css';
import '../../css/i/iq54a65ws.css';
import '../../css/d/dy54p4boo.css';
import '../../css/q/q_79hbbls.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="kbgg_hbee"/><path class="iq54a65ws"/><path class="dy54p4boo"/><path class="q_79hbbls"/></g>`,
		"fallback": "icon-park:peach",
	});
}

export default Component;
