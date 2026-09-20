import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0cm1bnr.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/s/stko6j3hi.css';
import '../../css/u/u6rhfld5x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai0cm1bnr"/><g class="x8poo_bjf"><path class="stko6j3hi"/><path class="u6rhfld5x"/></g>`,
		"fallback": "openmoji:revolving-hearts",
	});
}

export default Component;
