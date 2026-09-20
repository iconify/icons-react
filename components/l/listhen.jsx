import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwnvnhtuf.css';
import '../../css/w/w73t0xrpc.css';
import '../../css/i/itmz3uk7h.css';
import '../../css/i/icgy7_u1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wwnvnhtuf"/><path class="w73t0xrpc"/><path class="itmz3uk7h"/><path class="icgy7_u1b"/></g>`,
		"fallback": "unjs:listhen",
	});
}

export default Component;
