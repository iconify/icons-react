import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alenx-1ob.css';
import '../../css/v/v3abpxbtw.css';
import '../../css/i/i3obgmbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="alenx-1ob"/><path class="v3abpxbtw"/><path class="i3obgmbwz"/></g>`,
		"fallback": "andrsrxn:resend-square",
	});
}

export default Component;
