import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j73aidbfy.css';
import '../../css/u/upxs60bgh.css';
import '../../css/o/ollo1vbxs.css';
import '../../css/d/d006ogo3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j73aidbfy"/><path class="upxs60bgh"/><circle class="ollo1vbxs"/><path class="d006ogo3r"/></g>`,
		"fallback": "andrsrxn:timer-pause",
	});
}

export default Component;
