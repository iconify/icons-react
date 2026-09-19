import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujan6dgjz.css';
import '../../css/g/g2vwxab6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujan6dgjz"/><path clip-rule="evenodd" class="g2vwxab6z"/></g>`,
		"fallback": "healthicons:spleen-24px",
	});
}

export default Component;
