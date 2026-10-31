import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/edp2z3bic.css';
import '../../css/l/l7rp9pspr.css';
import '../../css/k/kvenboveb.css';
import '../../css/y/yk6w4ldpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="edp2z3bic wm-shadow"/><path class="l7rp9pspr wm-shadow"/><path class="kvenboveb"/><path class="yk6w4ldpt"/></g>`,
		"fallback": "withicons-brutal:rolling-pin",
	});
}

export default Component;
