import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3w9__hvs.css';
import '../../css/h/h_r-84sqe.css';
import '../../css/a/akigolbem.css';
import '../../css/m/mr0liibob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3w9__hvs"/><path class="h_r-84sqe"/><path class="akigolbem"/><path class="mr0liibob"/></g>`,
		"fallback": "streamline-color:round-cap",
	});
}

export default Component;
