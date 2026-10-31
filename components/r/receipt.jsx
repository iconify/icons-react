import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aguilgmnz.css';
import '../../css/q/qc4ukd41w.css';
import '../../css/y/ytth9f11g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aguilgmnz wm-k"/><path class="qc4ukd41w wm-shine"/><path class="wm-shine ytth9f11g"/></g>`,
		"fallback": "withicons-lunar:receipt",
	});
}

export default Component;
