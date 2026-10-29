import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vsnu5gbhp.css';
import '../../css/j/jlb-a5b-w.css';
import '../../css/x/xtrag_b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vsnu5gbhp"/><path class="jlb-a5b-w wm-k"/><path class="wm-a xtrag_b9w"/></g>`,
		"fallback": "withicons:sun-sketch",
	});
}

export default Component;
