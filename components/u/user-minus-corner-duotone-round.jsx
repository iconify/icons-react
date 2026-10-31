import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqa80ob3q.css';
import '../../css/r/rqadsjtjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bqa80ob3q"/><path class="rqadsjtjn"/></g>`,
		"fallback": "coolicons:user-minus-corner-duotone-round",
	});
}

export default Component;
