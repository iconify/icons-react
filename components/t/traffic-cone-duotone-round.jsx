import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m16qhbb8b.css';
import '../../css/w/wuz3n1w3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m16qhbb8b"/><path class="wuz3n1w3q"/></g>`,
		"fallback": "coolicons:traffic-cone-duotone-round",
	});
}

export default Component;
