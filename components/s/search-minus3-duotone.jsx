import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdb-6xbip.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/l/l-8vcccud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mdb-6xbip"/><path class="wf82r5bjl"/><path clip-rule="evenodd" class="l-8vcccud"/></g>`,
		"fallback": "reicon:search-minus3-duotone",
	});
}

export default Component;
