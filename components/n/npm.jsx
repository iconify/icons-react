import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/y/y2p9vbt3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t_ev7s-sv"/><path class="y2p9vbt3p"/></g>`,
		"fallback": "grommet-icons:npm",
	});
}

export default Component;
