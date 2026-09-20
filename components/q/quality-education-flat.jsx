import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aizdbmpfr.css';
import '../../css/m/mco_cxbks.css';
import '../../css/q/q9_270j0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aizdbmpfr"/><path class="mco_cxbks"/><path class="q9_270j0f"/></g>`,
		"fallback": "streamline-color:quality-education-flat",
	});
}

export default Component;
