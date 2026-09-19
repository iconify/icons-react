import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mlh4cxb2g.css';
import '../../css/q/q7xvvuotk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mlh4cxb2g"/><path class="q7xvvuotk"/></g>`,
		"fallback": "iconamoon:invoice-duotone",
	});
}

export default Component;
