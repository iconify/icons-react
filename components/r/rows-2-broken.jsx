import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jtpwddb9o.css';
import '../../css/w/wip28lbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jtpwddb9o"/><path class="wip28lbxr"/></g>`,
		"fallback": "solar:rows-2-broken",
	});
}

export default Component;
