import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9j2w3uqr.css';
import '../../css/l/l7lhfpbqa.css';
import '../../css/q/qkqa4ibdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9j2w3uqr"/><path class="l7lhfpbqa"/><path class="qkqa4ibdp"/></g>`,
		"fallback": "andrsrxn:vegan",
	});
}

export default Component;
