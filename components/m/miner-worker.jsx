import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mucm1fdxh.css';
import '../../css/c/c6dys3_cr.css';
import '../../css/r/rrexukl6y.css';
import '../../css/p/pw7tkgboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mucm1fdxh"/><path class="c6dys3_cr"/><path clip-rule="evenodd" class="rrexukl6y"/><path class="pw7tkgboe"/></g>`,
		"fallback": "healthicons:miner-worker",
	});
}

export default Component;
