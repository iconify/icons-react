import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0q_v-0ci.css';
import '../../css/t/tzg22jwzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0q_v-0ci"/><path class="tzg22jwzo"/></g>`,
		"fallback": "coolicons:skip-forward-duotone-round",
	});
}

export default Component;
