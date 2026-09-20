import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8i10r1kv.css';
import '../../css/i/i3bnwuyhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8i10r1kv"/><path class="i3bnwuyhs"/></g>`,
		"fallback": "majesticons:phone-outgoing",
	});
}

export default Component;
