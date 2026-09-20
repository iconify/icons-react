import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kd_lxf7ev.css';
import '../../css/y/y7agq5f-m.css';
import '../../css/v/v5ci8l68i.css';
import '../../css/e/e5dr67_pc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kd_lxf7ev"/><path clip-rule="evenodd" class="y7agq5f-m"/><path class="v5ci8l68i"/><path class="e5dr67_pc"/></g>`,
		"fallback": "streamline-flex-color:new-sticky-note",
	});
}

export default Component;
