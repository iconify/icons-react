import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-51vky1v.css';
import '../../css/l/l-nbotb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-51vky1v"/><path class="l-nbotb_e"/></g>`,
		"fallback": "coolicons:tooth-duotone-round",
	});
}

export default Component;
