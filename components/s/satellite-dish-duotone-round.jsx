import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-6vr7q-z.css';
import '../../css/u/udjp6gmkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-6vr7q-z"/><path class="udjp6gmkm"/></g>`,
		"fallback": "coolicons:satellite-dish-duotone-round",
	});
}

export default Component;
