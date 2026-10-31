import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu7h5qd_z.css';
import '../../css/e/e7_jnabwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mu7h5qd_z"/><path class="e7_jnabwg"/></g>`,
		"fallback": "coolicons:mushroom-duotone-round",
	});
}

export default Component;
