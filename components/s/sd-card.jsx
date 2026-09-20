import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q54o3ib6v.css';
import '../../css/h/hwd93wb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q54o3ib6v"/><path class="hwd93wb_k"/></g>`,
		"fallback": "tdesign:sd-card",
	});
}

export default Component;
