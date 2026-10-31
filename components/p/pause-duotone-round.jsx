import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7esqzb-w.css';
import '../../css/l/lupsfdh-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7esqzb-w"/><path class="lupsfdh-o"/></g>`,
		"fallback": "coolicons:pause-duotone-round",
	});
}

export default Component;
