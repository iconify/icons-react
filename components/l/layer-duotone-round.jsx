import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f60mhac2y.css';
import '../../css/s/s8mxj9j4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f60mhac2y"/><path class="s8mxj9j4h"/></g>`,
		"fallback": "coolicons:layer-duotone-round",
	});
}

export default Component;
