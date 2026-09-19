import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qeqqu_b3d.css';
import '../../css/t/t5wljjboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qeqqu_b3d"/><path class="t5wljjboe"/></g>`,
		"fallback": "healthicons:sweating-24px",
	});
}

export default Component;
