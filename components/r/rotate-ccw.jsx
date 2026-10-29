import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g91ipheph.css';
import '../../css/u/u1y1jeciz.css';
import '../../css/m/mmu-i9bcf.css';
import '../../css/l/lgxb8mlsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g91ipheph wm-k"/><path class="u1y1jeciz wm-k"/><path class="mmu-i9bcf wm-k"/><path class="lgxb8mlsn wm-shine"/></g>`,
		"fallback": "withicons-anime:rotate-ccw",
	});
}

export default Component;
