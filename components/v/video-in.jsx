import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i99jr6b1b.css';
import '../../css/d/dx3r8qbcz.css';
import '../../css/u/u0ezb_yob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i99jr6b1b"/><rect class="dx3r8qbcz"/><path class="u0ezb_yob"/></g>`,
		"fallback": "andrsrxn:video-in",
	});
}

export default Component;
