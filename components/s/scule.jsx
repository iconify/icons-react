import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d75nx_b4s.css';
import '../../css/v/vlsyhihxd.css';
import '../../css/m/m14u_276j.css';
import '../../css/k/kt-odbcjh.css';
import '../../css/g/gas-hsbbl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d75nx_b4s"/><path class="vlsyhihxd"/><path class="m14u_276j"/><path class="kt-odbcjh"/><path class="gas-hsbbl"/></g>`,
		"fallback": "unjs:scule",
	});
}

export default Component;
