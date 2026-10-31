import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j40y-b_9s.css';
import '../../css/f/f1v3z76qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j40y-b_9s"/><path class="f1v3z76qi"/></g>`,
		"fallback": "coolicons:radio-receiver-duotone-round",
	});
}

export default Component;
