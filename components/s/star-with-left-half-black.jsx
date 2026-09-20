import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aagr5ebei.css';
import '../../css/h/h9-x2ac6m.css';
import '../../css/h/hcf_1bcts.css';
import '../../css/r/r8ikbo9ae.css';
import '../../css/l/l7_ivckqz.css';
import '../../css/j/jbllbibrd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aagr5ebei"/><path class="h9-x2ac6m"/><path class="hcf_1bcts"/><g class="r8ikbo9ae"><path class="l7_ivckqz"/><path class="jbllbibrd"/></g>`,
		"fallback": "openmoji:star-with-left-half-black",
	});
}

export default Component;
