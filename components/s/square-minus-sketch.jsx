import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j6iui7arm.css';
import '../../css/g/gduuvtb0e.css';
import '../../css/a/awk9_jbks.css';
import '../../css/j/jk40j7w3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j6iui7arm"/><path class="gduuvtb0e wm-k"/><path class="awk9_jbks wm-a"/><path class="jk40j7w3r wm-a"/></g>`,
		"fallback": "withicons:square-minus-sketch",
	});
}

export default Component;
