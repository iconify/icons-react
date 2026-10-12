import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbrcs-slv.css';
import '../../css/u/unxjtfu6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kbrcs-slv"/><path class="unxjtfu6k"/></g>`,
		"fallback": "andrsrxn:key-shift",
	});
}

export default Component;
