import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9l253_we.css';
import '../../css/t/tnh5r9ewm.css';
import '../../css/w/w0p0gjbdt.css';
import '../../css/w/wgam8gbcr.css';
import '../../css/e/eh2_tfbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d9l253_we"/><path class="tnh5r9ewm"/><path class="w0p0gjbdt"/><path class="wgam8gbcr"/><path class="eh2_tfbpa"/></g>`,
		"fallback": "andrsrxn:island",
	});
}

export default Component;
