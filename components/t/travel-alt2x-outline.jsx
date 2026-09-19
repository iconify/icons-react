import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t71xneb_n.css';
import '../../css/q/qbzs0sbjx.css';
import '../../css/d/d3rw2v6lb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t71xneb_n"/><path class="qbzs0sbjx"/><path clip-rule="evenodd" class="d3rw2v6lb"/></g>`,
		"fallback": "healthicons:travel-alt2x-outline",
	});
}

export default Component;
