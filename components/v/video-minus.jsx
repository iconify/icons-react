import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uptqqtb_c.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/t/t0yodebcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uptqqtb_c"/><path class="fi-43sb1e"/><path class="t0yodebcq"/></g>`,
		"fallback": "andrsrxn:video-minus",
	});
}

export default Component;
