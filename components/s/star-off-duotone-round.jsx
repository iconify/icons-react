import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5_knyx6q.css';
import '../../css/s/sgmsrbbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5_knyx6q"/><path class="sgmsrbbap"/></g>`,
		"fallback": "coolicons:star-off-duotone-round",
	});
}

export default Component;
