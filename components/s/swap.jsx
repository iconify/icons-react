import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f7f-4dxab.css';
import '../../css/z/zapf9wtzl.css';
import '../../css/y/ylqikcc_h.css';
import '../../css/t/t50l83bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="f7f-4dxab wm-shadow"/><path class="wm-shadow zapf9wtzl"/><path class="ylqikcc_h"/><path class="t50l83bdr"/></g>`,
		"fallback": "withicons-brutal:swap",
	});
}

export default Component;
