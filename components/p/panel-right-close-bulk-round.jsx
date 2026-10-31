import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f--irmbsa.css';
import '../../css/j/jtacai2bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f--irmbsa"/><path class="jtacai2bp"/></g>`,
		"fallback": "coolicons:panel-right-close-bulk-round",
	});
}

export default Component;
