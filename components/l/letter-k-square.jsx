import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/b/blqnkukah.css';
import '../../css/b/bpfpwbrlb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="blqnkukah"/><path class="bpfpwbrlb"/></g>`,
		"fallback": "andrsrxn:letter-k-square",
	});
}

export default Component;
