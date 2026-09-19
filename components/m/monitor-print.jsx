import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zau_029ve.css';
import '../../css/d/ds0-m5bxn.css';
import '../../css/b/bej3h2bvr.css';
import '../../css/p/pw4dn1s2u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zau_029ve"/><path clip-rule="evenodd" class="ds0-m5bxn"/><path clip-rule="evenodd" class="bej3h2bvr"/><path class="pw4dn1s2u"/></g>`,
		"fallback": "pepicons:monitor-print",
	});
}

export default Component;
