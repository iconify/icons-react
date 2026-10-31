import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx5qsly0i.css';
import '../../css/q/q1_hfobpg.css';
import '../../css/a/a6u564dvt.css';
import '../../css/p/p_-5xob1x.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rx5qsly0i"/><path class="q1_hfobpg"/><path class="a6u564dvt"/><path class="p_-5xob1x"/></g>`,
		"fallback": "cif:sy",
	});
}

export default Component;
