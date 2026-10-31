import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bwxb4zbru.css';
import '../../css/w/wfy5mof3d.css';
import '../../css/r/rh6thpbkx.css';
import '../../css/d/dnn8z0qmr.css';
import '../../css/x/xltuw1ech.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bwxb4zbru wm-shadow"/><path class="wfy5mof3d wm-shadow"/><path class="rh6thpbkx"/><path class="dnn8z0qmr"/><path class="xltuw1ech"/></g>`,
		"fallback": "withicons-brutal:user",
	});
}

export default Component;
