import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f--irmbsa.css';
import '../../css/k/k-wu649ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f--irmbsa"/><path class="k-wu649ya"/></g>`,
		"fallback": "coolicons:panel-right-open-bulk-round",
	});
}

export default Component;
