import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pugvlo1xx.css';
import '../../css/p/p8q_si8uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pugvlo1xx wm-k"/><path class="p8q_si8uy wm-a"/></g>`,
		"fallback": "withicons:podcast-gloss",
	});
}

export default Component;
