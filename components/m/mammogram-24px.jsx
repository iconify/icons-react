import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ol7rqsjfu.css';
import '../../css/q/q5xqlqo9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ol7rqsjfu"/><path class="q5xqlqo9d"/></g>`,
		"fallback": "healthicons:mammogram-24px",
	});
}

export default Component;
