import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek0m7eb_v.css';
import '../../css/o/o9sdf1p-c.css';
import '../../css/i/ipzibwbds.css';
import '../../css/a/au44d9z6f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ek0m7eb_v"/><path class="o9sdf1p-c"/><path class="ipzibwbds"/><path class="au44d9z6f"/></g>`,
		"fallback": "streamline-flex-color:script-2",
	});
}

export default Component;
