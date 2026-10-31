import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ip84-2sbm.css';
import '../../css/c/cxwa6gl-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ip84-2sbm"/><path class="cxwa6gl-p"/></g>`,
		"fallback": "coolicons:note-edit-duotone-round",
	});
}

export default Component;
