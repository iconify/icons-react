import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hrzs9nb5f.css';
import '../../css/j/jjm1ldbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hrzs9nb5f"/><path class="jjm1ldbgr"/></g>`,
		"fallback": "keyline-icons:text-quote-sharp-duotone",
	});
}

export default Component;
