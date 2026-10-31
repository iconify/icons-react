import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q_dqh-oxk.css';
import '../../css/z/z_tx0113m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q_dqh-oxk wm-k"/><path class="wm-a z_tx0113m"/></g>`,
		"fallback": "withicons:snowman-gloss",
	});
}

export default Component;
