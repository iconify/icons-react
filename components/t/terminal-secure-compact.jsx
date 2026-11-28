import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztm1hib0j.css';
import '../../css/k/kf0xosbke.css';
import '../../css/x/xgq81cbcq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ztm1hib0j"/><path class="kf0xosbke"/><path clip-rule="evenodd" class="xgq81cbcq"/></g>`,
		"fallback": "codicon:terminal-secure-compact",
	});
}

export default Component;
