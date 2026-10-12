import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxa9_fdae.css';
import '../../css/p/p255of5oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nxa9_fdae"/><path class="p255of5oe"/></g>`,
		"fallback": "andrsrxn:pin",
	});
}

export default Component;
