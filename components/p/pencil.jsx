import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y0gx1ub4z.css';
import '../../css/s/sw_6-0boz.css';
import '../../css/e/elda9byxe.css';
import '../../css/w/wab66fbir.css';
import '../../css/b/buzzujbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y0gx1ub4z"/><path class="sw_6-0boz wm-shadow"/><path class="elda9byxe"/><path class="wab66fbir"/><path class="buzzujbbo"/></g>`,
		"fallback": "withicons-brutal:pencil",
	});
}

export default Component;
