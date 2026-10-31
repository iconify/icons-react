import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gteu6_bqc.css';
import '../../css/v/v9-z1pb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gteu6_bqc"/><path class="v9-z1pb8x"/></g>`,
		"fallback": "coolicons:volume-off-duotone-round",
	});
}

export default Component;
