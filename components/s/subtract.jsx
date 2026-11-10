import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxvajo8gq.css';
import '../../css/r/rdgietbva.css';
import '../../css/k/k-_j5gnuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxvajo8gq"/><path class="rdgietbva"/><path class="k-_j5gnuc"/></g>`,
		"fallback": "andrsrxn:subtract",
	});
}

export default Component;
