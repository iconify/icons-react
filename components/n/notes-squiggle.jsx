import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht2n8rylu.css';
import '../../css/e/ex-drp13w.css';
import '../../css/g/glh4tzv3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ht2n8rylu"/><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ex-drp13w"/><path class="glh4tzv3q"/></g>`,
		"fallback": "andrsrxn:notes-squiggle",
	});
}

export default Component;
