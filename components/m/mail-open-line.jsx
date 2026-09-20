import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o27eombkx.css';
import '../../css/s/seq92yhma.css';
import '../../css/e/epwzq1a5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o27eombkx"/><path class="seq92yhma"/><path class="epwzq1a5s"/></g>`,
		"fallback": "majesticons:mail-open-line",
	});
}

export default Component;
