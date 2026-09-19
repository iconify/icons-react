import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx5qsly0i.css';
import '../../css/q/qg8ed74ug.css';
import '../../css/f/flkqk9ded.css';
import '../../css/y/yp3_hqbsq.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rx5qsly0i"/><path class="qg8ed74ug"/><path class="flkqk9ded"/><path class="yp3_hqbsq"/></g>`,
		"fallback": "cif:sy",
	});
}

export default Component;
