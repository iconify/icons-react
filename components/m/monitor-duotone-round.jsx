import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9xuj-2zq.css';
import '../../css/k/k2ipvfqmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9xuj-2zq"/><path class="k2ipvfqmc"/></g>`,
		"fallback": "coolicons:monitor-duotone-round",
	});
}

export default Component;
