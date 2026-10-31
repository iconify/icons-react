import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b16_kugxl.css';
import '../../css/m/m7w5vhb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b16_kugxl"/><path class="m7w5vhb4k"/></g>`,
		"fallback": "coolicons:plane-takeoff-duotone-round",
	});
}

export default Component;
