import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsllhdbpu.css';
import '../../css/n/nye_uubrn.css';
import '../../css/w/wip28lbxr.css';
import '../../css/j/jtpwddb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rsllhdbpu"/><path class="nye_uubrn"/><path class="wip28lbxr"/><path class="jtpwddb9o"/></g>`,
		"fallback": "solar:rows-4-broken",
	});
}

export default Component;
