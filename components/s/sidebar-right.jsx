import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/j/jw6_s00qn.css';
import '../../css/u/uhr2_rb0p.css';
import '../../css/c/caw_8nb8t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="jw6_s00qn"/><path class="uhr2_rb0p"/><path class="caw_8nb8t"/></g>`,
		"fallback": "gala:sidebar-right",
	});
}

export default Component;
