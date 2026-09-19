import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d-_v3vaqc.css';
import '../../css/x/xhce_hbyg.css';
import '../../css/j/jx0woobce.css';
import '../../css/l/lzkg2p4uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d-_v3vaqc"/><path class="xhce_hbyg"/><path class="jx0woobce"/><circle class="lzkg2p4uu"/></g>`,
		"fallback": "hugeicons:mouse-left-click-05",
	});
}

export default Component;
