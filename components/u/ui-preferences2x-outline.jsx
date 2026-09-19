import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hihi0xbxs.css';
import '../../css/i/ir72yz0kf.css';
import '../../css/k/k7qrafbfv.css';
import '../../css/u/utwgsoz9d.css';
import '../../css/n/n--5h7b2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hihi0xbxs"/><path clip-rule="evenodd" class="ir72yz0kf"/><path class="k7qrafbfv"/><path clip-rule="evenodd" class="utwgsoz9d"/><path class="n--5h7b2e"/></g>`,
		"fallback": "healthicons:ui-preferences2x-outline",
	});
}

export default Component;
