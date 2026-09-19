import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tx4ucrbrc.css';
import '../../css/p/plg4ghbsm.css';
import '../../css/a/ai58kdhbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tx4ucrbrc"/><path clip-rule="evenodd" class="plg4ghbsm"/><path clip-rule="evenodd" class="ai58kdhbv"/></g>`,
		"fallback": "healthicons:stent-outline",
	});
}

export default Component;
