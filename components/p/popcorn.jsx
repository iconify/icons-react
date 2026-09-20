import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzsz66bth.css';
import '../../css/i/iqms-w39y.css';
import '../../css/h/he5xhtbxt.css';
import '../../css/e/e05puib_q.css';
import '../../css/i/i93fm0biq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wzsz66bth"/><path class="iqms-w39y"/><path class="he5xhtbxt"/><path class="e05puib_q"/><path class="i93fm0biq"/></g>`,
		"fallback": "streamline-color:popcorn",
	});
}

export default Component;
