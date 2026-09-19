import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvfcafr-w.css';
import '../../css/e/eh6tp53uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvfcafr-w"/><path class="eh6tp53uq"/></g>`,
		"fallback": "gg:row-last",
	});
}

export default Component;
