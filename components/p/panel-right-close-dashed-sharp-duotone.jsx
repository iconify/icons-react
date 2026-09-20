import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nl6i3qb2f.css';
import '../../css/e/ess6f3oak.css';
import '../../css/q/q_i5o_bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nl6i3qb2f"/><path class="ess6f3oak"/><path class="q_i5o_bfs"/></g>`,
		"fallback": "keyline-icons:panel-right-close-dashed-sharp-duotone",
	});
}

export default Component;
