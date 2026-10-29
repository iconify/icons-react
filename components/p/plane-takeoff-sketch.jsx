import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uhbvnmlqs.css';
import '../../css/c/crjbpijjy.css';
import '../../css/e/e_6oe7ajk.css';
import '../../css/r/rvo70qbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uhbvnmlqs"/><path class="crjbpijjy wm-a"/><path class="e_6oe7ajk wm-k"/><path class="rvo70qbei wm-a"/></g>`,
		"fallback": "withicons:plane-takeoff-sketch",
	});
}

export default Component;
