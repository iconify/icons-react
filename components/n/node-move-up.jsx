import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/epk6im27b.css';
import '../../css/n/nwqrko_2p.css';
import '../../css/d/dyhpa9bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="epk6im27b"/><path class="nwqrko_2p"/><path class="dyhpa9bzx"/></g>`,
		"fallback": "hugeicons:node-move-up",
	});
}

export default Component;
